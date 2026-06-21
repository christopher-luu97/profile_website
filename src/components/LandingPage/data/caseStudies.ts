export type CaseStudyStatus = 'planned' | 'in-progress' | 'available';

export interface CaseStudy {
  id: string;
  name: string;
  status: string;
  statusType: CaseStudyStatus;
  description: string;
  willDemonstrate: string[];
  technologies: string[];
  outcomes: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-001',
    name: 'Agentic AI Search Platform',
    status: 'Synthetic demo planned',
    statusType: 'planned',
    description:
      'A representative architecture showing how an agentic search system routes queries through planning, retrieval, and verification before returning grounded responses.',
    willDemonstrate: [
      'Multi-step agent planning and tool-call orchestration',
      'Retrieval-augmented generation with citation grounding',
      'Response verification and source attribution',
      'Enterprise-grade access and audit patterns',
    ],
    technologies: ['Python', 'Azure OpenAI', 'Azure AI Search', 'FastAPI', 'React'],
    outcomes:
      'Demonstrate how enterprise search can go beyond keyword matching to deliver verified, source-linked answers at scale.',
  },
  {
    id: 'cs-002',
    name: 'RAG Knowledge Explorer',
    status: 'Write-up planned',
    statusType: 'planned',
    description:
      'A document intelligence system that ingests, indexes, and enables conversational querying over a governed corpus of internal documents.',
    willDemonstrate: [
      'Document ingestion, chunking, and semantic indexing',
      'Hybrid search combining keyword and vector retrieval',
      'Citation-linked conversational responses',
      'Responsible deployment in governed environments',
    ],
    technologies: ['Python', 'Azure AI Search', 'Azure OpenAI', 'FastAPI'],
    outcomes:
      'Show how RAG can be applied responsibly with full traceability and access controls.',
  },
  {
    id: 'cs-003',
    name: 'Full Stack Analytics Product',
    status: 'Representative architecture',
    statusType: 'planned',
    description:
      'Based on real delivery patterns, with sensitive details removed. An end-to-end analytics application covering ELT pipeline, data model, and interactive dashboard.',
    willDemonstrate: [
      'ELT pipeline design and orchestration',
      'Data modelling for analytics consumption',
      'Self-service analytics UI with role-based access',
      'Production deployment on governed infrastructure',
    ],
    technologies: ['Python', 'SQL', 'R', 'Shiny', 'Docker'],
    outcomes:
      'Demonstrate the full delivery lifecycle from raw data ingestion to a production analytics product.',
  },
  {
    id: 'cs-004',
    name: 'Geospatial Healthcare Access Explorer',
    status: 'Synthetic demo planned',
    statusType: 'planned',
    description:
      'A synthetic interactive map showing healthcare service accessibility across geographic areas, built on open data.',
    willDemonstrate: [
      'Geospatial data processing and enrichment',
      'Interactive Leaflet mapping for policy audiences',
      'Accessibility scoring and gap identification',
      'Policy-facing analytical UI',
    ],
    technologies: ['R', 'Shiny', 'Leaflet', 'Python', 'SQL'],
    outcomes:
      'Show how spatial analytics can support evidence-based decisions in healthcare planning.',
  },
  {
    id: 'cs-005',
    name: 'ELT Pipeline Visualiser',
    status: 'Write-up planned',
    statusType: 'planned',
    description:
      'A documented medallion-architecture data pipeline with visual lineage showing how raw data becomes trusted analytics-ready outputs.',
    willDemonstrate: [
      'Bronze, silver, and gold data layer design',
      'Pipeline orchestration and scheduling',
      'Data quality checks and lineage tracking',
      'Legible documentation for non-technical stakeholders',
    ],
    technologies: ['Python', 'SQL', 'Docker', 'GitHub Actions'],
    outcomes:
      'Make the invisible work of data engineering legible to both technical and non-technical stakeholders.',
  },
  {
    id: 'cs-006',
    name: 'Audio Intelligence Desktop App',
    status: 'Coming soon',
    statusType: 'in-progress',
    description:
      'A desktop application for offline audio transcription, keyword search, and timeline navigation — running entirely in the browser without cloud dependency.',
    willDemonstrate: [
      'Browser-side ML inference without cloud dependency',
      'Audio processing and transcription pipeline',
      'Keyword and timestamp search interface',
      'Offline-first, privacy-preserving architecture',
    ],
    technologies: ['React', 'TypeScript', 'WhisperX', 'Python'],
    outcomes:
      'Demonstrate that production-quality AI features can be delivered without data privacy trade-offs.',
  },
];
