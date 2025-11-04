import axios, { type AxiosInstance } from "axios";

const SUPABASE_URL = "https://qkclmecrwnaqmrplcroq.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrY2xtZWNyd25hcW1ycGxjcm9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1OTQ1OTIsImV4cCI6MjA3NzE3MDU5Mn0.gaKXvANpaTD3PQpin2kJqn3g_itawi5N5XMtojXwkYM";

export const api: AxiosInstance = axios.create({
  baseURL: `${SUPABASE_URL}/rest/v1`,
  headers: {
    "Content-Type": "application/json",
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    Prefer: "return=representation",
  },
});
