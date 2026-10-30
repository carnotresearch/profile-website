import type { Metadata } from "next"
import { MultilingualChatbotContent } from "./content"

export const metadata: Metadata = {
  title: "Multilingual AI Chatbot | GeM | icarKno™",
  description:
    "Enterprise Conversational AI Platform with 24/7 support in 15+ languages, 93.2% accuracy. For Banking, Finance & Government. Listed on GeM.",
  openGraph: {
    title: "Multilingual AI Chatbot | Enterprise Conversational AI | icarKno™",
    description: "24/7 enterprise AI chatbot in 15+ languages, 93.2% accuracy. For banking, finance, and government. Listed on GeM.",
    url: "https://carnotresearch.com/products/gem/multilingual-chatbot",
  },
  alternates: { canonical: "https://carnotresearch.com/products/gem/multilingual-chatbot" },
}

export default function MultilingualChatbotPage() {
  return <MultilingualChatbotContent />
}
