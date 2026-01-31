import type { MessageType, PipelineMode, TonePreset } from "@/types/generation";

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const MESSAGE_TYPES: {
  value: MessageType;
  label: string;
  maxLength: number;
  defaultTone: TonePreset;
  description: string;
}[] = [
  {
    value: "connection_request",
    label: "Connection Request",
    maxLength: 300,
    defaultTone: "concise",
    description: "Short LinkedIn connection note (max 300 chars)",
  },
  {
    value: "inmail_short",
    label: "InMail (Short)",
    maxLength: 800,
    defaultTone: "professional",
    description: "Brief InMail with subject line",
  },
  {
    value: "inmail_long",
    label: "InMail (Long)",
    maxLength: 1900,
    defaultTone: "professional",
    description: "Detailed InMail with full context",
  },
  {
    value: "referral_request",
    label: "Referral Request",
    maxLength: 1200,
    defaultTone: "warm",
    description: "Ask for a referral to a specific role",
  },
  {
    value: "hiring_manager",
    label: "Hiring Manager Outreach",
    maxLength: 1200,
    defaultTone: "enthusiastic",
    description: "Direct outreach to a hiring manager",
  },
  {
    value: "informational_interview",
    label: "Informational Interview",
    maxLength: 1000,
    defaultTone: "curious",
    description: "Request a brief informational chat",
  },
  {
    value: "follow_up",
    label: "Follow-Up",
    maxLength: 600,
    defaultTone: "friendly",
    description: "Follow up on a previous interaction",
  },
];

export const PIPELINE_MODES: {
  value: PipelineMode;
  label: string;
  description: string;
  llmCalls: string;
}[] = [
  {
    value: "fast",
    label: "Fast",
    description: "Single draft + grounding check. Quick and cheap.",
    llmCalls: "2 calls",
  },
  {
    value: "judge",
    label: "Judge",
    description: "Two drafts, a judge picks the best one.",
    llmCalls: "4 calls",
  },
  {
    value: "council",
    label: "AI Council",
    description: "Dual drafts, cross-review, judge selection, grounding verification.",
    llmCalls: "6-7 calls",
  },
];

export const TONE_PRESETS: { value: TonePreset; label: string }[] = [
  { value: "professional", label: "Professional" },
  { value: "casual", label: "Casual" },
  { value: "enthusiastic", label: "Enthusiastic" },
  { value: "concise", label: "Concise" },
  { value: "warm", label: "Warm" },
  { value: "curious", label: "Curious" },
  { value: "friendly", label: "Friendly" },
];

export const AI_MODELS = [
  { value: "openai:gpt-4o", label: "GPT-4o", provider: "openai" },
  { value: "openai:gpt-4o-mini", label: "GPT-4o Mini", provider: "openai" },
  { value: "gemini:gemini-2.0-flash", label: "Gemini 2.0 Flash", provider: "gemini" },
  { value: "gemini:gemini-1.5-pro", label: "Gemini 1.5 Pro", provider: "gemini" },
];

export const NAV_ITEMS = [
  { href: "/", label: "Dashboard", icon: "LayoutDashboard" as const },
  { href: "/generate", label: "Generate", icon: "Sparkles" as const },
  { href: "/resumes", label: "Resumes", icon: "FileText" as const },
  { href: "/history", label: "History", icon: "Clock" as const },
  { href: "/settings", label: "Settings", icon: "Settings" as const },
];
