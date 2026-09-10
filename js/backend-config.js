// Supabase configuration
// 1) Create a free Supabase project.
// 2) Project Settings > API: paste Project URL and anon public key below.
// The anon key is designed to be public; security comes from RLS/storage policies.
const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
const BACKEND_CONFIGURED = !SUPABASE_URL.startsWith("YOUR_") && !SUPABASE_ANON_KEY.startsWith("YOUR_");
window.portfolioSupabase = BACKEND_CONFIGURED ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
