export interface Capability {
  id: string;
  name: string;
  description: string;
  icon: string;
  relevantTo: string[];
}

export const capabilities: Capability[] = [
  {
    id: 'agentic-ai',
    name: 'Agentic AI',
    description:
      'Designing and building multi-step agent systems with tool calling, planning, verification, and human-in-the-loop controls.',
    icon: 'https://unpkg.com/lucide-static@latest/icons/bot.svg',
    relevantTo: ['ai-engineer', 'analytics-consultant'],
  },
  {
    id: 'ai-implementation',
    name: 'AI Implementation',
    description:
      'Applying machine learning, deep learning, and modern AI patterns to production problems across classification, prediction, and generation.',
    icon: 'https://unpkg.com/lucide-static@latest/icons/brain-circuit.svg',
    relevantTo: ['ai-engineer', 'data-engineer'],
  },
  {
    id: 'rag-search',
    name: 'RAG and Enterprise Search',
    description:
      'Building retrieval-augmented generation systems and semantic search pipelines over governed enterprise datasets.',
    icon: 'https://unpkg.com/lucide-static@latest/icons/search.svg',
    relevantTo: ['ai-engineer', 'data-engineer'],
  },
  {
    id: 'data-engineering',
    name: 'Data Engineering',
    description:
      'Designing and implementing ELT pipelines, data models, and medallion-style data platforms from raw sources to analytics-ready outputs.',
    icon: 'https://unpkg.com/lucide-static@latest/icons/database.svg',
    relevantTo: ['data-engineer', 'analytics-consultant'],
  },
  {
    id: 'full-stack',
    name: 'Full Stack Applications',
    description:
      'Building end-to-end web applications and internal tools using React, TypeScript, FastAPI, Python, R/Shiny, and REST APIs.',
    icon: 'https://unpkg.com/lucide-static@latest/icons/layers.svg',
    relevantTo: ['software-engineer', 'analytics-consultant'],
  },
  {
    id: 'geospatial',
    name: 'Geospatial Analytics',
    description:
      'Building decision-support tools with spatial data, interactive maps, and geographic visualisations for policy and planning use cases.',
    icon: 'https://unpkg.com/lucide-static@latest/icons/map-pin.svg',
    relevantTo: ['data-engineer', 'analytics-consultant'],
  },
  {
    id: 'automation',
    name: 'Automation and Reporting',
    description:
      'Automating data workflows, document generation, and reporting pipelines to reduce manual effort and improve consistency.',
    icon: 'https://unpkg.com/lucide-static@latest/icons/zap.svg',
    relevantTo: ['software-engineer', 'data-engineer'],
  },
  {
    id: 'government-delivery',
    name: 'Secure Government Delivery',
    description:
      'Delivering technology products in secure, governed environments with strict data handling, compliance, and risk requirements.',
    icon: 'https://unpkg.com/lucide-static@latest/icons/shield-check.svg',
    relevantTo: ['software-engineer', 'analytics-consultant'],
  },
];
