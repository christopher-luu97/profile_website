export interface StackItem {
  name: string;
  icon: string;
  group: string;
}

export interface StackGroup {
  group: string;
  items: StackItem[];
}

export const stack: StackItem[] = [
  // Languages
  {
    name: 'Python',
    group: 'Languages',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'TypeScript',
    group: 'Languages',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'R',
    group: 'Languages',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
  },
  {
    name: 'SQL',
    group: 'Languages',
    icon: 'https://unpkg.com/lucide-static@latest/icons/database.svg',
  },
  // Frontend & Visualisation
  {
    name: 'React',
    group: 'Frontend & Visualisation',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Shiny',
    group: 'Frontend & Visualisation',
    icon: 'https://unpkg.com/lucide-static@latest/icons/layout-dashboard.svg',
  },
  {
    name: 'Leaflet',
    group: 'Frontend & Visualisation',
    icon: 'https://unpkg.com/lucide-static@latest/icons/map.svg',
  },
  // Backend & APIs
  {
    name: 'FastAPI',
    group: 'Backend & APIs',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  },
  {
    name: 'Plumber',
    group: 'Backend & APIs',
    icon: 'https://unpkg.com/lucide-static@latest/icons/server.svg',
  },
  // Data & AI
  {
    name: 'Azure OpenAI',
    group: 'Data & AI',
    icon: 'https://unpkg.com/lucide-static@latest/icons/bot.svg',
  },
  {
    name: 'Azure AI Search',
    group: 'Data & AI',
    icon: 'https://unpkg.com/lucide-static@latest/icons/search.svg',
  },
  {
    name: 'Machine Learning',
    group: 'Data & AI',
    icon: 'https://unpkg.com/lucide-static@latest/icons/brain-circuit.svg',
  },
  {
    name: 'Data Pipelines',
    group: 'Data & AI',
    icon: 'https://unpkg.com/lucide-static@latest/icons/workflow.svg',
  },
  // Cloud & Infrastructure
  {
    name: 'Azure',
    group: 'Cloud & Infrastructure',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  },
  {
    name: 'Microsoft Foundry',
    group: 'Cloud & Infrastructure',
    icon: 'https://unpkg.com/lucide-static@latest/icons/building-2.svg',
  },
  {
    name: 'Docker',
    group: 'Cloud & Infrastructure',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'GitHub Actions',
    group: 'Cloud & Infrastructure',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
];

export const stackGroups: StackGroup[] = Array.from(
  new Set(stack.map((item) => item.group))
).map((group) => ({
  group,
  items: stack.filter((item) => item.group === group),
}));
