export interface PipelineStepEvent {
  step: string;
  status: "in_progress" | "complete" | "error";
  data?: Record<string, unknown>;
}
