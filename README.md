# Miles for Smiles Nepal | मुस्कानको लागि पाइला नेपाल

> **Tagline:** Reach the Unreached · हर नेपालीको स्वस्थ मुस्कान  
> **Official Website:** [https://milesforsmilesnepal.org.np](https://milesforsmilesnepal.org.np)  
> **Registration:** Social Welfare Council Nepal Affiliation No: 53120 | DAO Kathmandu Reg: 55

---

## 🌟 About the Organization

**Miles for Smiles Nepal** is a youth-led non government organization founded by dental students dedicated to eradicating oral disease, relieving agonizing toothaches, and expanding healthcare access to underserved and remote communities across Nepal.

Over 90% of dental professionals in Nepal practice in urban centers, while 80% of families in remote mountain districts have never visited a dentist. Miles for Smiles bridges this gap by organizing student-led high-altitude medical caravans with portable dental equipment.

### Core Activities:
- **Free Dental Treatment Camps:** Painless Atraumatic Restorative Treatment (ART), cavity fillings, extractions, and scaling.
- **Preventive Dental Care & Fluoride Application:** Applying sodium fluoride varnish and silver diamine fluoride (SDF) across rural schools.
- **School Health & Hygiene Education:** Interactive toothbrushing techniques with oversized acrylic models and puppet shows.
- **Menstrual Hygiene Awareness:** Empowering adolescent girls and distributing reusable, eco-friendly dignity kits.
- **Disaster & Humanitarian Outreach:** Monsoon flood relief health camps, antiseptic oral rinses, and waterborne disease prevention.

### Documented Impact:
- **6,486+** Students Screened & Educated
- **15+** Remote Districts Served (Jumla, Humla, Sindhupalchok, Solukhumbu, Chitwan, Morang, etc.)
- **18,500+** Oral Hygiene Packs Distributed
- **1,420+** Free Dental Restorations & Interventions Completed
- **460+** Youth Volunteers Mobilized

---

## 🎨 Brand Identity

| Element | Specification |
| :--- | :--- |
| **Primary Blue** | `#0D5EA6` |
| **Secondary Sky** | `#4DB6E5` |
| **Accent Gold** | `#F4C542` |
| **Canvas Background**| `#F7FAFC` |
| **Text Color** | `#1F2937` |
| **English Typography** | Plus Jakarta Sans |
| **Nepali Typography** | Noto Sans Devanagari, Kalimati, Kokila |

---

## 🧭 Website Architecture & Pages

- **Home (`#home`):** Hero section with human storytelling, live impact dashboard, interactive Nepal Map, featured expeditions, journey timeline, field testimonials, partners showcase, and urgent donation triggers.
- **About Us (`#about`):** Founding story by dental students at Tribhuvan University (IOM), mission, vision, youth leadership committee, and legal governance.
- **Projects (`#projects`):** Interactive searchable directory covering:
  - *Miles for Smiles Karnali Expedition*
  - *World Oral Health Day Campaign*
  - *School Oral Health & Fluoride Varnish Program*
  - *Dignity & Health: Menstrual Hygiene Outreach*
  - *Monsoon Flood Relief Dental Caravan*
- **Impact Map (`#impact-map`):** Interactive SVG Nepal map with dynamic district nodes (Humla, Jumla, Sindhupalchok, Kathmandu, Chitwan, Solukhumbu, Morang) highlighting photos, medical logs, and beneficiary quotes.
- **Gallery (`#gallery`):** Modern masonry gallery with category filters and full-screen lightbox modal.
- **Reports & Transparency (`#reports`):** Audited financial statements (89.4% direct healthcare spending, 0% executive salary), PDF downloads, and interactive field report upload simulator.
- **Volunteer (`#volunteer`):** Comprehensive registration form for dental students, dental surgeons, medical students, and logistics leads, with instant confirmation and downloadable clinical handbook.
- **Sponsors & Partners (`#sponsors`):** Professional partnership tiers (Rotary Nepal, Nepal Dental Association, Colgate-Palmolive CSR, Days for Girls) and partnership inquiry portal.
- **Donate (`#donate`):** Giving tiers (रू ५००, रू २,०००, रू १०,०००, रू २५,०००) with payment channels for **eSewa**, **Khalti**, **Domestic Bank Wire (Nepal Bank Ltd / Nabil Bank)**, and **International Wire / PayPal**. Includes official tax receipt request form.
- **News & Updates (`#news`):** Field dispatches, press releases, and national media coverage.
- **Contact (`#contact`):** Central Secretariat in Maharajgunj, Kathmandu, direct contact channels, and community dental camp request form for rural school headmasters.

---

## 🚀 Technical Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React (`lucide-react`)
- **Animations:** Motion (`motion`)
- **Architecture:** Zero-reload client-side hash routing (`#projects`, `#impact-map`, etc.), fully compatible with GitHub Pages static hosting.
- **SEO & Social Sharing:**
  - Rich metadata, OpenGraph tags, and Twitter Cards in `index.html`
  - Schema.org JSON-LD for NGO verification
  - Dynamic `public/robots.txt` and `public/sitemap.xml`
- **CI/CD:** Automated GitHub Actions workflow in `.github/workflows/deploy.yml`

---

## 🛠️ Local Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Build for Production / GitHub Pages
```bash
npm run build
```
The static HTML, CSS, JavaScript, and asset bundle will be generated in `./dist`.

---

## 📦 GitHub Pages Deployment

This project includes a ready-to-use GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. Push this repository to GitHub.
2. In your GitHub repository settings, go to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. Every push to the `main` branch will automatically build and deploy the website to GitHub Pages!

---

## 📜 License & Compliance

© 2026 Miles for Smiles Nepal (मुस्कानको लागि पाइला नेपाल).  
All humanitarian rights reserved. Distributed for public non-profit health equity.
