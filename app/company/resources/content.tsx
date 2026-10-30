"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const articles = [
  {
    id: "pose-detection-accuracy",
    tag: "Computer Vision",
    title: "Improving Pose Detection Accuracy Using Custom Training",
    summary: "Pose detection is a foundational element in motion tracking systems used in sports analytics, rehabilitation, and performance analysis. Achieving high accuracy in real-world environments requires more than standard pre-trained models.",
    findings: [
      { label: "Domain-Specific Dataset Creation", body: "A custom dataset was developed to capture realistic movement patterns across different speeds, angles, and environments." },
      { label: "High-Quality Keypoint Annotation", body: "Precise labeling ensured accurate joint detection and reduced inconsistencies during training." },
      { label: "Model Fine-Tuning and Optimization", body: "Training parameters, preprocessing methods, and validation strategies were refined to enhance stability and generalization." },
    ],
    outcome: "The system achieved improved accuracy, reduced tracking noise, and greater consistency during dynamic motion. This demonstrates the importance of tailored datasets in production-ready motion analysis.",
  },
  {
    id: "realtime-cv-performance",
    tag: "Real-Time Systems",
    title: "Real-Time Computer Vision Systems for Performance Analysis",
    summary: "Real-time computer vision systems are essential for applications requiring immediate insights, including sports performance tracking, motion analysis, and automated monitoring.",
    findings: [
      { label: "Efficient Model Architecture", body: "Lightweight models were selected and optimized to reduce processing time while maintaining detection accuracy." },
      { label: "Low-Latency Data Processing", body: "Streamlined input and output pipelines were designed to minimize delays in live environments." },
      { label: "Hardware Optimization", body: "GPU acceleration and edge computing strategies were leveraged to support real-time execution." },
      { label: "System Stability and Monitoring", body: "Performance checks were implemented to maintain consistent results during continuous operation." },
    ],
    outcome: "A high-performance computer vision pipeline capable of delivering accurate, real-time analysis for motion tracking and automated performance evaluation.",
  },
  {
    id: "edge-deep-learning",
    tag: "Edge AI",
    title: "Optimizing Deep Learning Models for Edge Devices",
    summary: "Deploying deep learning on edge devices presents unique challenges. Unlike cloud environments, edge systems operate with limited compute, memory, and energy. Achieving high performance under these constraints requires targeted optimization.",
    findings: [
      { label: "Model Compression", body: "Model size was reduced through pruning and parameter optimization to improve efficiency." },
      { label: "Quantization", body: "Model computations were converted to lower-precision formats, decreasing memory usage and speeding up inference." },
      { label: "Lightweight Architectures", body: "Efficient network designs suitable for real-time edge execution were selected and validated." },
      { label: "Hardware-Aware Optimization", body: "Model performance was aligned with the capabilities of specific processors and embedded systems." },
    ],
    outcome: "A streamlined deep learning pipeline delivering reliable performance on edge devices, enabling real-time AI in constrained environments.",
  },
  {
    id: "research-to-prototype",
    tag: "Development Workflow",
    title: "From Research to Prototype: Our Development Workflow",
    summary: "Transforming research ideas into practical solutions requires structure, experimentation, and disciplined execution. Our workflow converts early-stage concepts into validated, working prototypes efficiently and systematically.",
    findings: [
      { label: "Problem Definition and Feasibility", body: "Research direction is aligned with real-world requirements. Clear objectives and measurable outcomes are established before technical development begins." },
      { label: "Structured Experimentation", body: "Multiple approaches are tested in controlled environments through rapid iteration cycles to identify the most effective solution." },
      { label: "Prototype Development", body: "The validated solution is engineered into a functional system with defined performance benchmarks and integration planning." },
      { label: "Testing and Optimization", body: "The prototype is stress-tested for stability, scalability, and readiness for further deployment or commercialization." },
    ],
    outcome: "This workflow bridges the gap between innovation and implementation, enabling research-driven ideas to evolve into tangible, high-impact technologies.",
  },
  {
    id: "motion-tracking-biomechanics",
    tag: "Biomechanics",
    title: "Motion Tracking and Biomechanics Analysis Using Computer Vision",
    summary: "Computer vision–based motion tracking enables precise analysis of human movement using standard video inputs. By leveraging AI-driven pose estimation, body keypoints are detected and tracked across frames to generate structured biomechanical insights.",
    findings: [
      { label: "Joint Angle Measurement", body: "Real-time computation of joint angles supports technique assessment and injury risk identification." },
      { label: "Movement Symmetry and Range of Motion", body: "Asymmetry detection and range-of-motion metrics support rehabilitation monitoring and performance benchmarking." },
      { label: "Temporal Coordination Analysis", body: "Frame-by-frame tracking captures timing relationships between body segments for detailed motion evaluation." },
      { label: "Domain-Specific Model Refinement", body: "Models were fine-tuned on real sports environments to achieve stable tracking accuracy under dynamic conditions." },
    ],
    outcome: "Scalable, data-driven biomechanics analysis without specialized motion capture hardware, validated in dynamic sports environments.",
  },
  {
    id: "production-ai-challenges",
    tag: "Deployment",
    title: "Challenges in Deploying AI Systems in Real-World Environments",
    summary: "Moving AI models from research to production presents practical challenges. Models that perform well in controlled settings often face performance degradation in real-world conditions.",
    findings: [
      { label: "Data Variability", body: "Live inputs differ from training data, affecting accuracy and stability. Distribution shift requires continuous monitoring and retraining strategies." },
      { label: "Infrastructure Limitations", body: "Latency constraints, hardware limits, and scalability requirements must be addressed as part of the deployment architecture." },
      { label: "System Integration Complexity", body: "AI solutions must operate within established workflows, which often creates compatibility and orchestration challenges." },
      { label: "Continuous Maintenance", body: "AI models require ongoing evaluation and retraining to sustain accuracy as real-world conditions evolve over time." },
    ],
    outcome: "Addressing these challenges is essential to building reliable, production-ready AI systems that function effectively beyond the lab.",
  },
]

const tagColors: Record<string, string> = {
  "Computer Vision":      "bg-cyan-50 text-cyan-700",
  "Real-Time Systems":    "bg-violet-50 text-violet-700",
  "Edge AI":              "bg-emerald-50 text-emerald-700",
  "Development Workflow": "bg-amber-50 text-amber-700",
  Biomechanics:           "bg-blue-50 text-blue-700",
  Deployment:             "bg-red-50 text-red-700",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AI Research Articles: icarKno™",
  description: "Applied AI research from icarKno™ covering pose detection, real-time vision systems, edge deployment, and production challenges.",
  itemListElement: articles.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: { "@type": "Article", name: a.title, description: a.summary, author: { "@type": "Organization", name: "icarKno™" } },
  })),
}

export function ResourcesContent() {
  const { tx } = useLanguage()
  const r = tx.resourcesPage

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium tracking-wider text-accent uppercase">{r.hero.badge}</p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{r.hero.heading}</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">{r.hero.desc}</p>
          </div>
        </div>
      </section>

      {/* Articles */}
      {articles.map((article, index) => (
        <section
          key={article.id}
          id={article.id}
          className={`py-20 lg:py-28 ${index % 2 === 0 ? "bg-secondary/30" : "bg-background"}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${tagColors[article.tag] ?? "bg-secondary text-foreground"}`}>
                  {article.tag}
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">{article.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{article.summary}</p>
                <div className="mt-6 rounded-xl border-l-2 border-accent bg-accent/5 px-5 py-4">
                  <p className="text-sm leading-relaxed text-foreground">
                    <span className="font-semibold">{r.outcome} </span>
                    {article.outcome}
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">{r.keyFindings}</h3>
                <ul className="mt-6 flex flex-col gap-5">
                  {article.findings.map((f) => (
                    <li key={f.label} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{f.label}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{r.cta.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">{r.cta.desc}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">{r.cta.contactBtn}<ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/solutions">{r.cta.solutionsBtn}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
