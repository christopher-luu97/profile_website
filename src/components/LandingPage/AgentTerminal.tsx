import React, { useEffect, useRef, useState } from "react";

type StepType = "user" | "think" | "tool" | "result" | "response";
interface ToolParam { key: string; val: string; }
interface AgentStep { type: StepType; text?: string; toolName?: string; params?: ToolParam[]; }
interface Scenario { id: string; steps: AgentStep[]; }

const SCENARIOS: Scenario[] = [
  {
    id: "policy",
    steps: [
      { type: "user",     text: "Summarise the key risks from the latest aged care reform submissions" },
      { type: "think",    text: "querying policy document corpus" },
      { type: "tool",     toolName: "search_documents", params: [
          { key: "query",  val: '"aged care reform risk"' },
          { key: "source", val: "policy_submissions_2024" },
          { key: "k",      val: "18" },
      ]},
      { type: "result",   text: "312 documents matched · top 18 by semantic score" },
      { type: "think",    text: "clustering risk themes from retrieved documents" },
      { type: "tool",     toolName: "extract_themes", params: [
          { key: "docs",   val: "18 items" },
          { key: "method", val: "semantic_clustering" },
      ]},
      { type: "result",   text: "themes → regulatory compliance · workforce gaps · funding shortfalls" },
      { type: "response", text: "Three dominant risk themes emerged across 312 submissions. Regulatory compliance was cited in 71 % of responses, followed by workforce shortages in regional areas and structural funding gaps." },
    ],
  },
  {
    id: "rag",
    steps: [
      { type: "user",     text: "What are the data retention obligations under current governance policy?" },
      { type: "think",    text: "querying enterprise knowledge base" },
      { type: "tool",     toolName: "query_knowledge_base", params: [
          { key: "query",  val: '"data retention obligations"' },
          { key: "corpus", val: "enterprise_governance" },
          { key: "top_k",  val: "9" },
      ]},
      { type: "result",   text: "9 passages retrieved · avg relevance score 0.91" },
      { type: "think",    text: "synthesising answer from retrieved context" },
      { type: "response", text: "Based on the governance framework (9 passages, avg relevance 0.91): records must be retained for 7 years post-project closure, with encryption at rest required for all PII-classified data." },
    ],
  },
  {
    id: "geo",
    steps: [
      { type: "user",     text: "Identify underserved healthcare zones within 60 km of regional centres" },
      { type: "think",    text: "loading spatial layers and population datasets" },
      { type: "tool",     toolName: "spatial_query", params: [
          { key: "layer",     val: "healthcare_facilities" },
          { key: "radius_km", val: "60" },
          { key: "metric",    val: "drive_time_mins" },
      ]},
      { type: "result",   text: "14 candidate zones · affected population: 284,000" },
      { type: "tool",     toolName: "score_access", params: [
          { key: "zones",  val: "14" },
          { key: "method", val: "composite_access_index" },
      ]},
      { type: "result",   text: "avg access score: 0.31 · 6 zones flagged high-need" },
      { type: "response", text: "Six high-need zones identified, affecting ~284,000 residents. Drive times exceed 45 minutes for primary care in 4 of 6 flagged zones — targeted expansion recommended." },
    ],
  },
];

const STEP_DELAY: Record<StepType, number> = {
  user: 400, think: 950, tool: 1050, result: 700, response: 950,
};
const PAUSE_MS = 3500;
const FADE_MS  = 500;

export const AgentTerminal: React.FC = () => {
  const [scenarioIdx,  setScenarioIdx]  = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [fading,       setFading]       = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const scenario = SCENARIOS[scenarioIdx];
  const allDone  = visibleCount >= scenario.steps.length;

  useEffect(() => {
    if (fading) {
      const t = setTimeout(() => {
        setScenarioIdx((i) => (i + 1) % SCENARIOS.length);
        setVisibleCount(0);
        setFading(false);
      }, FADE_MS);
      return () => clearTimeout(t);
    }
    if (allDone) {
      const t = setTimeout(() => setFading(true), PAUSE_MS);
      return () => clearTimeout(t);
    }
    const step  = scenario.steps[visibleCount];
    const delay = STEP_DELAY[step.type];
    const t = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(t);
  }, [fading, allDone, visibleCount, scenario]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [visibleCount]);

  const isThinkingActive = (idx: number) =>
    scenario.steps[idx].type === "think" && idx === visibleCount - 1 && !allDone;

  return (
    <div className="kh-agent-terminal" aria-label="Simulated agent session — synthetic demo">
      <div className="kh-agent-terminal__chrome">
        <div className="kh-agent-terminal__dots">
          <span className="kh-agent-terminal__dot kh-agent-terminal__dot--red"   />
          <span className="kh-agent-terminal__dot kh-agent-terminal__dot--amber" />
          <span className="kh-agent-terminal__dot kh-agent-terminal__dot--green" />
        </div>
        <span className="kh-agent-terminal__title">agent-session</span>
        <span className="kh-agent-terminal__badge">SYNTHETIC DEMO</span>
      </div>

      <div
        ref={bodyRef}
        className={`kh-agent-terminal__body${fading ? " is-fading" : ""}`}
        aria-live="polite"
        aria-atomic="false"
      >
        {scenario.steps.slice(0, visibleCount).map((step, i) => (
          <div key={`${scenarioIdx}-${i}`} className={`kh-agent-step kh-agent-step--${step.type}`}>
            {step.type === "user" && (
              <>
                <p className="kh-agent-step__label">USER</p>
                <p className="kh-agent-step__text">{step.text}</p>
              </>
            )}
            {step.type === "think" && (
              <p className="kh-agent-step__think">
                <span className="kh-agent-step__think-icon" aria-hidden="true">◎</span>
                <span className="kh-agent-step__think-label">AGENT</span>
                <span className="kh-agent-step__think-text">{step.text}</span>
                {isThinkingActive(i) && (
                  <span className="kh-agent-step__think-dots" aria-hidden="true">
                    <span /><span /><span />
                  </span>
                )}
              </p>
            )}
            {step.type === "tool" && (
              <div className="kh-agent-step__tool">
                <p className="kh-agent-step__tool-name">
                  <span className="kh-agent-step__tool-prefix">fn </span>
                  {step.toolName}
                </p>
                {step.params?.map((p, pi) => (
                  <p key={pi} className="kh-agent-step__param">
                    <span className="kh-agent-step__param-key">{p.key}</span>
                    <span className="kh-agent-step__param-val">{p.val}</span>
                  </p>
                ))}
              </div>
            )}
            {step.type === "result" && (
              <p className="kh-agent-step__result">
                <span aria-hidden="true">↳ </span>{step.text}
              </p>
            )}
            {step.type === "response" && (
              <div className="kh-agent-step__response">
                <p className="kh-agent-step__response-label">RESPONSE</p>
                <p className="kh-agent-step__response-text">{step.text}</p>
              </div>
            )}
          </div>
        ))}
        {!allDone && !fading && (
          <span className="kh-agent-terminal__cursor" aria-hidden="true" />
        )}
      </div>

      <div className="kh-agent-terminal__footer">
        <span>SYNTHETIC DEMO</span>
        <span className="kh-agent-terminal__scenario-dots">
          {SCENARIOS.map((_, i) => (
            <span
              key={i}
              className={`kh-agent-terminal__scenario-dot${i === scenarioIdx ? " is-active" : ""}`}
            />
          ))}
        </span>
        <span>representative of real delivery patterns</span>
      </div>
    </div>
  );
};
