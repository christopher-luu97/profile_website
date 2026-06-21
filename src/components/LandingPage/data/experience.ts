export interface Experience {
  id: string;
  sector: string;
  context: string;
  scope: string;
  outcomes: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-001',
    sector: 'Federal Government',
    context: 'A federal government department operating in a secure analytics environment',
    scope: 'Technical lead and delivery engineer',
    outcomes: [
      'Designed and delivered internal analytics platforms, reducing manual reporting effort across multiple business units.',
      'Built ELT pipelines from governed enterprise datasets to production-ready analytics outputs used by decision-makers.',
      'Established data engineering standards and documentation adopted across the delivery team.',
    ],
    tags: ['Python', 'SQL', 'Data Engineering', 'R', 'Shiny', 'Secure Environments'],
  },
  {
    id: 'exp-002',
    sector: 'Healthcare Policy',
    context: 'A national healthcare policy team requiring spatial and analytical decision support',
    scope: 'Analytics engineer and geospatial developer',
    outcomes: [
      'Built geospatial decision-support tools used by policy analysts to assess service coverage and accessibility.',
      'Delivered interactive dashboards enabling self-service analysis across large administrative datasets.',
      'Automated previously manual reporting workflows, significantly reducing turnaround time.',
    ],
    tags: ['R', 'Shiny', 'Leaflet', 'Geospatial', 'Analytics', 'Plumber'],
  },
  {
    id: 'exp-003',
    sector: 'Technology Consulting',
    context: 'Cross-sector consulting engagements spanning AI, data, and software delivery',
    scope: 'Technical consultant and AI engineer',
    outcomes: [
      'Delivered agentic AI and RAG proof-of-concept systems using Azure OpenAI and Azure AI Search for enterprise clients.',
      'Prototyped multi-step agent workflows demonstrating feasibility for document intelligence use cases.',
      'Supported clients through architecture design, vendor evaluation, and technical discovery phases.',
    ],
    tags: ['Azure OpenAI', 'Azure AI Search', 'Python', 'FastAPI', 'Agentic AI', 'RAG'],
  },
];
