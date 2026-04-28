-- Create leads table
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  lead_source TEXT NOT NULL DEFAULT 'landing_page',
  consent BOOLEAN NOT NULL DEFAULT false,
  consent_timestamp TIMESTAMPTZ,
  lifecycle_stage TEXT NOT NULL DEFAULT 'subscriber',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (with validation)
CREATE POLICY "Anyone can submit a lead"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(email) <= 255
  AND length(first_name) > 0
  AND length(first_name) <= 100
  AND consent = true
);

-- Index on email for lookups
CREATE INDEX idx_leads_email ON public.leads(email);