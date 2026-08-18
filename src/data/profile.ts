export interface NavItem {
  id: string;
  label: string;
}

export const profile = {
  name: 'Ha Dinh Kien',
  role: 'Full Stack Engineer  ·  Applied AI',
  status: 'Open to new opportunities',
  bio: 'Full Stack Engineer specializing in applied AI, building production systems with Python, Django, FastAPI, React, and TypeScript. I deliver Retrieval Augmented Generation assistants and Model Context Protocol integrations that connect language models to real product data.',
  location: 'Ho Chi Minh City, Vietnam',
  phone: '0392717848',
  email: 'hadinhkienn@gmail.com',
  github: 'https://github.com/hadinhkeinn',
  linkedin: 'https://linkedin.com/in/hadinhkienn',
  portrait: '/avt.png'
};

export const stats = [
  { value: '2+', label: 'Years building production systems' },
  { value: '8.38', label: 'Cumulative GPA / 10.0' },
  { value: '770', label: 'TOEIC Listening & Reading' }
];

export const navItems: NavItem[] = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];
