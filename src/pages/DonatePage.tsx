import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Heart,
  QrCode,
  CreditCard,
  Building,
  Globe,
  Copy,
  Check,
  ShieldCheck,
  Sparkles,
  Receipt,
  FileCheck,
} from 'lucide-react';

interface DonatePageProps {
  onNavigate: (page: PageId) => void;
}

export const DonatePage: React.FC<DonatePageProps> = ({ onNavigate }) => {
  const [selectedMethod, setSelectedMethod] = useState<'esewa' | 'khalti' | 'bank' | 'international'>('esewa');
  const [selectedTier, setSelectedTier] = useState<number>(2000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Receipt request state
  const [receiptName, setReceiptName] = useState('');
  const [receiptEmail, setReceiptEmail] = useState('');
  const [receiptTxn, setReceiptTxn] = useState('');
  const [receiptSuccess, setReceiptSuccess] = useState(false);

  const tiers = [
    {
      amount: 500,
      usd: '$4',
      title: 'Smile Starter',
      nepaliTitle: '५ बालबालिकाको लागि',
      desc: 'Oral hygiene packs (toothbrush, fluoride paste & brushing timer card) for 5 village school students.',
    },
    {
      amount: 2000,
      usd: '$15',
      title: 'Classroom Protector',
      nepaliTitle: 'एक कक्षाको सम्पूर्ण स्वास्थ्य',
      desc: 'Topical sodium fluoride varnish and diagnostic oral screenings for an entire primary classroom (30 students).',
    },
    {
      amount: 10000,
      usd: '$75',
      title: 'Mountain Expedition Support',
      nepaliTitle: 'पहाडी ढुवानी तथा उपकरण',
      desc: 'Supports mountain porters carrying mobile dental handpieces, portable solar power, and sterilization autoclaves.',
    },
    {
      amount: 25000,
      usd: '$190',
      title: 'Village Camp Champion',
      nepaliTitle: 'गाउँभरिका लागि पूर्ण शिविर',
      desc: 'Comprehensive 2-day Atraumatic Restorative Treatment (ART) camp, tooth extractions, and menstrual kits for an entire settlement.',
    },
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 3000);
  };

  const handleReceiptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReceiptSuccess(true);
    setTimeout(() => {
      setReceiptSuccess(false);
      setReceiptName('');
      setReceiptEmail('');
      setReceiptTxn('');
    }, 6000);
  };

  const displayAmount = customAmount ? parseInt(customAmount) || 0 : selectedTier;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
          <span>Support Rural Health · सहयोग गर्नुहोस्</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Invest in a Child’s Radiant Smile
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-nepali">
          तपाईंको सानो सहयोगले विकट गाउँका बालबालिकालाई दाँतको असह्य पीडाबाट मुक्ति दिन सक्छ।
        </p>
      </div>

      {/* 1. TIER CALCULATOR */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900">Select Your Giving Tier</h2>
          <p className="text-xs text-slate-500 mt-1">
            Choose an amount or enter a custom sum. 89.4% directly funds clinical supplies and medications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.amount}
              onClick={() => {
                setSelectedTier(tier.amount);
                setCustomAmount('');
              }}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                selectedTier === tier.amount && !customAmount
                  ? 'bg-teal-50/70 border-[#16A396] ring-2 ring-[#16A396]/20 shadow-sm'
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-black text-slate-900 tabular-nums">
                    रू {tier.amount.toLocaleString()}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{tier.usd}</span>
                </div>
                <h4 className="text-sm font-bold text-[#16A396] mt-1">{tier.title}</h4>
                <div className="text-xs text-slate-500 font-nepali">{tier.nepaliTitle}</div>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">{tier.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold flex items-center justify-between">
                <span className={selectedTier === tier.amount && !customAmount ? 'text-[#16A396]' : 'text-slate-400'}>
                  {selectedTier === tier.amount && !customAmount ? 'Selected Tier' : 'Select Tier'}
                </span>
                <Heart
                  className={`w-3.5 h-3.5 ${
                    selectedTier === tier.amount && !customAmount
                      ? 'text-rose-500 fill-current'
                      : 'text-slate-300'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Custom Amount input */}
        <div className="max-w-md mx-auto bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3">
          <span className="text-xs font-bold text-slate-700 whitespace-nowrap">Custom Amount:</span>
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">रू</span>
            <input
              type="number"
              min="100"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="e.g. 5000"
              className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#16A396]"
            />
          </div>
        </div>
      </div>

      {/* 2. PAYMENT METHODS CHANNELS */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Direct Giving Channels</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">Official Donation Channels</h3>
          <p className="text-xs text-slate-500 mt-0.5">
            100% of donations are deposited directly into Miles for Smiles Nepal non-profit bank and merchant accounts.
          </p>
        </div>

        {/* Channel Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 bg-slate-100 rounded-2xl">
          <button
            onClick={() => setSelectedMethod('esewa')}
            className={`py-2.5 px-3 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
              selectedMethod === 'esewa'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <span>eSewa</span>
          </button>

          <button
            onClick={() => setSelectedMethod('khalti')}
            className={`py-2.5 px-3 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
              selectedMethod === 'khalti'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <span>Khalti</span>
          </button>

          <button
            onClick={() => setSelectedMethod('bank')}
            className={`py-2.5 px-3 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
              selectedMethod === 'bank'
                ? 'bg-[#16A396] text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <span>Bank Transfer</span>
          </button>

          <button
            onClick={() => setSelectedMethod('international')}
            className={`py-2.5 px-3 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
              selectedMethod === 'international'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <span>International</span>
          </button>
        </div>

        {/* Channel Detail Views */}
        <div className="pt-2">
          {selectedMethod === 'esewa' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                {/* Simulated eSewa QR Code */}
                <div className="w-48 h-48 bg-white p-3 rounded-2xl border-2 border-emerald-600 shadow-xs flex flex-col items-center justify-center relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900">
                    <rect x="0" y="0" width="30" height="30" fill="currentColor" />
                    <rect x="5" y="5" width="20" height="20" fill="white" />
                    <rect x="10" y="10" width="10" height="10" fill="currentColor" />
                    
                    <rect x="70" y="0" width="30" height="30" fill="currentColor" />
                    <rect x="75" y="5" width="20" height="20" fill="white" />
                    <rect x="80" y="10" width="10" height="10" fill="currentColor" />

                    <rect x="0" y="70" width="30" height="30" fill="currentColor" />
                    <rect x="5" y="75" width="20" height="20" fill="white" />
                    <rect x="10" y="80" width="10" height="10" fill="currentColor" />

                    <rect x="38" y="38" width="24" height="24" fill="#059669" rx="4" />
                    <text x="50" y="54" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">eSewa</text>
                  </svg>
                </div>
                <span className="text-xs font-bold text-emerald-700 mt-3">Scan via eSewa App</span>
                <span className="text-[11px] text-slate-500">Suggested: NPR {displayAmount.toLocaleString()}</span>
              </div>

              <div className="md:col-span-7 space-y-4 text-xs sm:text-sm">
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <span className="text-xs font-bold text-emerald-800 uppercase block">Verified Merchant Account</span>
                  <div className="text-base font-bold text-slate-900 mt-1">Miles for Smiles Nepal</div>
                  <div className="text-slate-600 mt-0.5 font-nepali">मुस्कानको लागि पाइला नेपाल</div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div>
                      <span className="text-xs text-slate-500 block">eSewa ID / Registered Mobile:</span>
                      <span className="font-mono font-bold text-slate-900">9841000000</span>
                    </div>
                    <button
                      onClick={() => handleCopy('9841000000', 'esewa')}
                      className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedField === 'esewa' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Copy ID</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div>
                      <span className="text-xs text-slate-500 block">Remarks / Purpose:</span>
                      <span className="font-semibold text-slate-800">Child Dental Camp Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedMethod === 'khalti' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                {/* Simulated Khalti QR Code */}
                <div className="w-48 h-48 bg-white p-3 rounded-2xl border-2 border-purple-700 shadow-xs flex flex-col items-center justify-center relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900">
                    <rect x="0" y="0" width="30" height="30" fill="currentColor" />
                    <rect x="5" y="5" width="20" height="20" fill="white" />
                    <rect x="10" y="10" width="10" height="10" fill="currentColor" />
                    
                    <rect x="70" y="0" width="30" height="30" fill="currentColor" />
                    <rect x="75" y="5" width="20" height="20" fill="white" />
                    <rect x="80" y="10" width="10" height="10" fill="currentColor" />

                    <rect x="0" y="70" width="30" height="30" fill="currentColor" />
                    <rect x="5" y="75" width="20" height="20" fill="white" />
                    <rect x="10" y="80" width="10" height="10" fill="currentColor" />

                    <rect x="36" y="38" width="28" height="24" fill="#6B21A8" rx="4" />
                    <text x="50" y="54" fontSize="9" fill="white" fontWeight="bold" textAnchor="middle">Khalti</text>
                  </svg>
                </div>
                <span className="text-xs font-bold text-purple-700 mt-3">Scan via Khalti App</span>
                <span className="text-[11px] text-slate-500">Target Amount: NPR {displayAmount.toLocaleString()}</span>
              </div>

              <div className="md:col-span-7 space-y-4 text-xs sm:text-sm">
                <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
                  <span className="text-xs font-bold text-purple-800 uppercase block">Registered Khalti ID</span>
                  <div className="text-base font-bold text-slate-900 mt-1">Miles for Smiles Nepal</div>
                  <div className="text-slate-600 mt-0.5 font-nepali">मुस्कानको लागि पाइला</div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div>
                      <span className="text-xs text-slate-500 block">Khalti ID / Number:</span>
                      <span className="font-mono font-bold text-slate-900">9841000000</span>
                    </div>
                    <button
                      onClick={() => handleCopy('9841000000', 'khalti')}
                      className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedField === 'khalti' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Copy ID</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs text-slate-500 block">Instant Verification:</span>
                    <span className="text-xs text-slate-700">Immediate digital confirmation on Khalti wallet</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedMethod === 'bank' && (
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#16A396] uppercase block">Official NGO Bank Account</span>
                  <div className="text-base font-bold text-slate-900 mt-1">Nepal Bank Limited / Nabil Bank</div>
                </div>
                <Building className="w-8 h-8 text-[#16A396] opacity-70" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block">Account Name:</span>
                    <strong className="text-slate-900">MILES FOR SMILES NEPAL</strong>
                  </div>
                  <button
                    onClick={() => handleCopy('MILES FOR SMILES NEPAL', 'accName')}
                    className="p-1.5 hover:bg-slate-200 rounded text-slate-500"
                    title="Copy Name"
                  >
                    {copiedField === 'accName' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block">Account Number:</span>
                    <strong className="text-slate-900 font-mono">0120100098412001</strong>
                  </div>
                  <button
                    onClick={() => handleCopy('0120100098412001', 'accNum')}
                    className="p-1.5 hover:bg-slate-200 rounded text-slate-500"
                    title="Copy Account Number"
                  >
                    {copiedField === 'accNum' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block">Branch & Location:</span>
                  <strong className="text-slate-900">Maharajgunj Branch, Kathmandu, Nepal</strong>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block">SWIFT / BIC Code:</span>
                    <strong className="text-slate-900 font-mono">NEBLNPKA</strong>
                  </div>
                  <button
                    onClick={() => handleCopy('NEBLNPKA', 'swift')}
                    className="p-1.5 hover:bg-slate-200 rounded text-slate-500"
                    title="Copy SWIFT"
                  >
                    {copiedField === 'swift' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {selectedMethod === 'international' && (
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-5 bg-slate-900 text-white rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#38C8BA] uppercase tracking-wider">
                  <Globe className="w-4 h-4" />
                  <span>International Wire & Diaspora Giving</span>
                </div>
                <h4 className="text-base font-bold text-white">Supporting from Abroad (USA, UK, Australia, EU)</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  International donors can wire funds directly to our SWIFT code or partner via our US 501(c)(3) fiscal sponsor portal (PayPal Giving Fund & GlobalGiving affiliate).
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-800 uppercase block">International Wire Routing Instructions:</span>
                <p className="text-xs text-slate-600">
                  Beneficiary: <strong>MILES FOR SMILES NEPAL</strong><br />
                  Intermediary Bank: Standard Chartered Bank / JPMorgan Chase<br />
                  Beneficiary Bank: Nepal Bank Limited, Kathmandu<br />
                  SWIFT: <strong>NEBLNPKA</strong><br />
                  Account No: <strong>0120100098412001</strong>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. RECEIPT & TAX EXEMPTION REQUEST */}
      <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 max-w-2xl mx-auto space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#16A396] uppercase tracking-wide">
          <Receipt className="w-4 h-4" />
          <span>Official Tax Exemption Receipt</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900">Request Your Official Donation Voucher</h3>
        <p className="text-xs text-slate-600">
          Already made a transfer via eSewa, Khalti, or Bank? Enter your transaction code below to receive an official stamp-signed receipt.
        </p>

        {receiptSuccess ? (
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2 font-medium">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Receipt request submitted! Our accounts team will email your receipt within 24 hours.</span>
          </div>
        ) : (
          <form onSubmit={handleReceiptSubmit} className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                value={receiptName}
                onChange={(e) => setReceiptName(e.target.value)}
                placeholder="Full Donor / Company Name"
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
              />
              <input
                type="email"
                required
                value={receiptEmail}
                onChange={(e) => setReceiptEmail(e.target.value)}
                placeholder="Receipt Email Address"
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
              />
            </div>
            <input
              type="text"
              required
              value={receiptTxn}
              onChange={(e) => setReceiptTxn(e.target.value)}
              placeholder="Transaction ID / Reference Number (e.g. eSewa Txn ID #982184)"
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#16A396]"
            />
            <button
              type="submit"
              className="w-full py-2.5 bg-[#16A396] hover:bg-[#0E786E] text-white font-bold rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              Generate Official Receipt Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
