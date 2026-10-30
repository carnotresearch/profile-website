import type { Metadata } from "next"
import { GenAIConversationalAgentContent } from "./content"

export const metadata: Metadata = {
  title: "Generative AI Conversational Agent | GeM | icarKno™",
  description:
    "Accurate on-premise, high-privacy, multilingual knowledge agent. From secure servers to the field's edge. Listed on GeM by icarKno™.",
  openGraph: {
    title: "Generative AI Conversational Agent | icarKno™",
    description: "On-premise, high-privacy, multilingual generative AI agent. Secure deployments from server to edge. Listed on GeM.",
    url: "https://carnotresearch.com/products/gem/genai-conversational-agent",
  },
  alternates: { canonical: "https://carnotresearch.com/products/gem/genai-conversational-agent" },
}

export default function GenAIConversationalAgentPage() {
  return <GenAIConversationalAgentContent />
}
