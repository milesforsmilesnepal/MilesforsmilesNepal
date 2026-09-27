import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fpnfjprhkiejekxlsjmh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwbmZqcHJoa2llamVreGxzam1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0Njk3MDEsImV4cCI6MjEwNjA0NTcwMX0.4CXIaTCbYrf1cYGqiXO_rcylvhIehWwk2czBDItsp_I';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
