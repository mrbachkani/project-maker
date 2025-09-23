import { createClient } from '@supabase/supabase-js';

// Supabase client configuration
// The URL and anon key are pulled from your environment variables. See `.env.example`.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);