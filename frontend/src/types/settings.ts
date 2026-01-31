export interface ApiKeyStatus {
  provider: string;
  is_set: boolean;
  updated_at: string | null;
}

export interface Preferences {
  default_tone: string;
  default_pipeline: string;
  default_model_a: string;
  default_model_b: string;
  default_judge_model: string;
}
