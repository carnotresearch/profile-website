import type { Metadata } from "next"
import { MeetingSummarizerContent } from "./content"

export const metadata: Metadata = {
  title: "Meeting Summarizer | GeM | icarKno™",
  description:
    "AI-powered meeting intelligence: auto-transcription, context tagging, and actionable summaries. On-premise capable. Listed on GeM by icarKno™.",
  openGraph: {
    title: "Meeting Summarizer | AI-Powered Meeting Intelligence | icarKno™",
    description: "Auto-transcription, context tagging, and actionable summaries from meetings. On-premise capable. Listed on GeM.",
    url: "https://carnotresearch.com/products/gem/meeting-summarizer",
  },
  alternates: { canonical: "https://carnotresearch.com/products/gem/meeting-summarizer" },
}

export default function MeetingSummarizerPage() {
  return <MeetingSummarizerContent />
}
