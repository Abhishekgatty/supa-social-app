import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://tifauodmxnwnzglcdfhd.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpZmF1b2RteG53bnpnbGNkZmhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMDQ3OTQsImV4cCI6MjA3MzY4MDc5NH0.neClmPjt34THi7DO-H4QKbzABRu7Sw9Z24Jsl3hMKdQ"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
