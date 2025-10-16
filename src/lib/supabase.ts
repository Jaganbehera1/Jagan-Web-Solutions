import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  tech: string[];
  image_url?: string;
  category: string;
  order: number;
  created_at: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  project_type?: string;
  message: string;
}
