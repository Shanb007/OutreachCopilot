export interface Resume {
  id: string;
  label: string;
  filename: string;
  raw_text: string;
  file_hash: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ResumeUploadRequest {
  file: File;
  label: string;
}

export interface ResumeUpdateRequest {
  label?: string;
  is_active?: boolean;
}
