import React from "react";

const NODE_H = 34;

type Accent = "entry" | "default" | "active" | "data" | "verify" | "exit";

interface SysNode {
  id: string;
  label: string;
  cx: number;
  cy: number;
  w: number;
  accent: Accent;
}

interface SysEdge {
  id: string;
  d: string;
  delay: string;
}

const NODES: SysNode[] = [
  { id: "n1", label: "User question",     cx: 180, cy: 40,  w: 170, accent: "entry"   },
  { id: "n2", label: "Web interface",     cx: 180, cy: 110, w: 155, accent: "default" },
  { id: "n3", label: "API layer",         cx: 180, cy: 180, w: 130, accent: "default" },
  { id: "n4", label: "Agent planner",     cx: 180, cy: 250, w: 160, accent: "active"  },
  { id: "n5", label: "Tool calls",        cx: 88,  cy: 326, w: 140, accent: "default" },
  { id: "n6", label: "Governed data",     cx: 272, cy: 326, w: 148, accent: "data"    },
  { id: "n7", label: "Verification layer",cx: 180, cy: 402, w: 175, accent: "verify"  },
  { id: "n8", label: "Grounded answer",   cx: 180, cy: 462, w: 178, accent: "exit"    },
];

// Edges connect node bottoms (cy + NODE_H/2) to node tops (cy - NODE_H/2)
const EDGES: SysEdge[] = [
  { id: "e1", d: "M180,57 L180,93",                     delay: "0s"    },
  { id: "e2", d: "M180,127 L180,163",                   delay: "0.3s"  },
  { id: "e3", d: "M180,197 L180,233",                   delay: "0.6s"  },
  { id: "e4", d: "M180,267 C180,288 88,288 88,309",     delay: "0.9s"  },
  { id: "e5", d: "M180,267 C180,288 272,288 272,309",   delay: "0.9s"  },
  { id: "e6", d: "M88,343 C88,364 180,364 180,385",     delay: "1.2s"  },
  { id: "e7", d: "M272,343 C272,364 180,364 180,385",   delay: "1.2s"  },
  { id: "e8", d: "M180,419 L180,445",                   delay: "1.5s"  },
];

const FILL: Record<Accent, string> = {
  entry:   "rgba(58,166,185,0.12)",
  default: "rgba(255,255,255,0.045)",
  active:  "rgba(49,94,168,0.2)",
  data:    "rgba(49,94,168,0.12)",
  verify:  "rgba(201,146,46,0.12)",
  exit:    "rgba(58,166,185,0.18)",
};

const STROKE: Record<Accent, string> = {
  entry:   "rgba(58,166,185,0.45)",
  default: "rgba(255,255,255,0.1)",
  active:  "rgba(49,94,168,0.55)",
  data:    "rgba(49,94,168,0.35)",
  verify:  "rgba(201,146,46,0.4)",
  exit:    "rgba(58,166,185,0.55)",
};

const BAR: Record<Accent, string> = {
  entry:   "#3aa6b9",
  default: "rgba(255,255,255,0.25)",
  active:  "#315ea8",
  data:    "#315ea8",
  verify:  "#c9922e",
  exit:    "#3aa6b9",
};

export const HeroSystemVisual: React.FC = () => {
  return (
    <div className="kh-system-visual">
      <svg
        viewBox="0 0 360 482"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="kh-system-visual__svg"
        role="img"
        aria-label="Representative architecture diagram showing an agentic AI system flow from user question to grounded answer"
      >
        {/* Dark panel background */}
        <rect width="360" height="482" rx="16" fill="#0e1525" />

        {/* Subtle dot grid */}
        <defs>
          <pattern
            id="kh-sys-grid"
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="12" cy="12" r="0.75" fill="rgba(255,255,255,0.055)" />
          </pattern>
        </defs>
        <rect width="360" height="482" rx="16" fill="url(#kh-sys-grid)" />

        {/* Base edge paths — static, dim */}
        {EDGES.map((edge) => (
          <path
            key={`${edge.id}-base`}
            d={edge.d}
            stroke="rgba(49,94,168,0.2)"
            strokeWidth={1}
          />
        ))}

        {/* Animated flow lines */}
        {EDGES.map((edge) => (
          <path
            key={`${edge.id}-flow`}
            d={edge.d}
            stroke="rgba(58,166,185,0.65)"
            strokeWidth={1.5}
            className="kh-flow-line"
            style={{ animationDelay: edge.delay }}
          />
        ))}

        {/* Nodes */}
        {NODES.map((node, i) => {
          const rx = node.cx - node.w / 2;
          const ry = node.cy - NODE_H / 2;
          return (
            <g key={node.id}>
              {/* Card rect */}
              <rect
                x={rx}
                y={ry}
                width={node.w}
                height={NODE_H}
                rx={7}
                fill={FILL[node.accent]}
                stroke={STROKE[node.accent]}
                strokeWidth={1}
              />
              {/* Left accent bar */}
              <rect
                x={rx + 2}
                y={node.cy - 7}
                width={3}
                height={14}
                rx={1.5}
                fill={BAR[node.accent]}
              />
              {/* Step number */}
              <text
                x={rx + 12}
                y={node.cy + 0.5}
                dominantBaseline="middle"
                fontSize={8}
                fontFamily="system-ui,-apple-system,sans-serif"
                fill="rgba(255,255,255,0.28)"
                letterSpacing="0.04em"
              >
                {String(i + 1).padStart(2, "0")}
              </text>
              {/* Label */}
              <text
                x={rx + 28}
                y={node.cy + 0.5}
                dominantBaseline="middle"
                fontSize={11}
                fontFamily="system-ui,-apple-system,sans-serif"
                fill="rgba(255,255,255,0.85)"
                fontWeight="500"
                letterSpacing="0.02em"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Footer label inside SVG */}
        <text
          x="180"
          y="474"
          textAnchor="middle"
          fontSize="8"
          fontFamily="system-ui,-apple-system,sans-serif"
          fill="rgba(255,255,255,0.18)"
          letterSpacing="0.18em"
        >
          REPRESENTATIVE ARCHITECTURE
        </text>
      </svg>
    </div>
  );
};
