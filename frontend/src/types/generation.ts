export interface Scorecard {
  specificity: number;
  clarity_of_ask: number;
  tone_fit: number;
  credibility: number;
  genericness_risk: number;
  hallucination_risk: number;
  length_compliance: boolean;
}

export interface ReviewResult {
  verdict: "accept" | "reject";
  explanation: string;
  scorecard: Scorecard;
  suggested_edits: string;
}

export interface JudgeDecision {
  winner: "draft_a" | "draft_b";
  reasoning: string;
  suggested_micro_edits: string;
  final_message: string;
}

export interface GroundingClaim {
  claim: string;
  source: "resume" | "job" | "profile" | "context" | "none" | null;
  verified: boolean;
  action: "kept" | "removed" | "rewritten";
}

export interface GroundingReport {
  claims: GroundingClaim[];
  revised_message: string;
  pass: boolean;
}

export interface PipelineStep {
  step: string;
  model: string;
  latency_ms: number;
  tokens: number;
}

export interface GenerationResult {
  id: string;
  final_message: string;
  draft_a: string | null;
  draft_b: string | null;
  review_a_of_b: ReviewResult | null;
  review_b_of_a: ReviewResult | null;
  judge_decision: JudgeDecision | null;
  grounding_report: GroundingReport | null;
  final_scorecard: Scorecard | null;
  pipeline_trace: PipelineStep[];
  total_tokens_used: number;
  total_latency_ms: number;
  created_at: string;
}

export interface GenerationRequest {
  resume_id: string;
  job_description_id: string;
  recipient_profile_id?: string;
  additional_context?: string;
  message_type: MessageType;
  pipeline_mode: PipelineMode;
  model_a: string;
  model_b?: string;
  judge_model?: string;
  tone?: TonePreset;
}

export type MessageType =
  | "connection_request"
  | "inmail_short"
  | "inmail_long"
  | "referral_request"
  | "hiring_manager"
  | "informational_interview"
  | "follow_up";

export type PipelineMode = "fast" | "judge" | "council";

export type TonePreset = "professional" | "casual" | "enthusiastic" | "concise" | "warm" | "curious" | "friendly";
