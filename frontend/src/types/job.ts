export interface JobDescription {
  id: string;
  source_url: string | null;
  source_platform: string | null;
  company_name: string | null;
  role_title: string | null;
  location: string | null;
  raw_text: string;
  structured_data: {
    responsibilities: string[];
    requirements: string[];
    keywords: string[];
  } | null;
  created_at: string;
}

export interface JobScrapeRequest {
  url: string;
}

export interface JobPasteRequest {
  raw_text: string;
  company_name?: string;
  role_title?: string;
}
