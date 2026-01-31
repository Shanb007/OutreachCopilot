export interface RecipientProfile {
  id: string;
  name: string | null;
  current_role: string | null;
  current_company: string | null;
  raw_text: string;
  input_mode: "paste" | "pdf" | "screenshot";
  created_at: string;
}

export interface RecipientPasteRequest {
  name?: string;
  current_role?: string;
  current_company?: string;
  raw_text: string;
}
