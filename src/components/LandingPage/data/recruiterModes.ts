export interface RecruiterMode {
  id: string;
  label: string;
  description: string;
}

export const recruiterModes: RecruiterMode[] = [
  {
    id: 'all',
    label: 'All capabilities',
    description: 'Show all capabilities',
  },
  {
    id: 'ai-engineer',
    label: 'AI Engineer',
    description: 'Focus on agentic AI, RAG, and machine learning systems',
  },
  {
    id: 'data-engineer',
    label: 'Data Engineer',
    description: 'Focus on data pipelines, platforms, and engineering',
  },
  {
    id: 'software-engineer',
    label: 'Software Engineer',
    description: 'Focus on full-stack software and delivery',
  },
  {
    id: 'analytics-consultant',
    label: 'Analytics Consultant',
    description: 'Focus on analytics, geospatial, and consulting',
  },
];
