
export interface Agent {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  tags: string[];
  image: string;
  video?: string;
  useCases: string[];
  techStack: string[];
}

export const categories = [
  'NLP',
  'Computer Vision',
  'Code Generation',
  'Data Analysis',
  'Automation',
  'Summarization',
  'Translation',
  'Recommendation',
];

export const agents: Agent[] = [
  {
    id: 1,
    name: 'TextMaster Pro',
    shortDescription: 'Advanced natural language processing for content generation and analysis',
    fullDescription: 'TextMaster Pro is a cutting-edge NLP agent that excels in content generation, sentiment analysis, and text summarization. It leverages state-of-the-art transformer models to understand context and generate human-like text across various domains.',
    category: 'NLP',
    tags: ['NLP', 'Content Generation', 'Sentiment Analysis'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    useCases: ['Blog writing', 'Customer service automation', 'Content moderation', 'Report generation'],
    techStack: ['GPT-4', 'BERT', 'Python', 'TensorFlow', 'FastAPI']
  },
  {
    id: 2,
    name: 'VisionAI Scanner',
    shortDescription: 'Real-time image recognition and object detection system',
    fullDescription: 'VisionAI Scanner provides advanced computer vision capabilities including object detection, image classification, and visual content analysis. Perfect for retail, security, and manufacturing applications.',
    category: 'Computer Vision',
    tags: ['Computer Vision', 'Object Detection', 'Image Analysis'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
    useCases: ['Quality control', 'Security monitoring', 'Inventory management', 'Medical imaging'],
    techStack: ['YOLO v8', 'OpenCV', 'PyTorch', 'Docker', 'Redis']
  },
  {
    id: 3,
    name: 'CodeGenius Assistant',
    shortDescription: 'Intelligent code generation and debugging companion',
    fullDescription: 'CodeGenius Assistant helps developers write better code faster with intelligent suggestions, automated testing, and bug detection across multiple programming languages.',
    category: 'Code Generation',
    tags: ['Code Generation', 'Debugging', 'Testing'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
    useCases: ['Code completion', 'Bug fixing', 'Test generation', 'Code review'],
    techStack: ['GitHub Copilot', 'ESLint', 'Jest', 'Node.js', 'TypeScript']
  },
  {
    id: 4,
    name: 'DataMiner Analytics',
    shortDescription: 'Powerful data analysis and pattern recognition engine',
    fullDescription: 'DataMiner Analytics transforms raw data into actionable insights through advanced statistical analysis, machine learning, and predictive modeling capabilities.',
    category: 'Data Analysis',
    tags: ['Data Analysis', 'Machine Learning', 'Predictive Modeling'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    useCases: ['Business intelligence', 'Fraud detection', 'Market analysis', 'Risk assessment'],
    techStack: ['Pandas', 'Scikit-learn', 'Apache Spark', 'PostgreSQL', 'Grafana']
  },
  {
    id: 5,
    name: 'WorkflowBot Pro',
    shortDescription: 'Intelligent automation for business processes',
    fullDescription: 'WorkflowBot Pro streamlines business operations through intelligent automation, workflow optimization, and seamless integration with existing systems.',
    category: 'Automation',
    tags: ['Automation', 'Workflow', 'Integration'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
    useCases: ['Email automation', 'Data entry', 'Report generation', 'System integration'],
    techStack: ['RPA', 'Zapier', 'Microsoft Power Automate', 'Python', 'REST APIs']
  },
  {
    id: 6,
    name: 'SummaryGenie',
    shortDescription: 'Intelligent document and content summarization',
    fullDescription: 'SummaryGenie creates concise, accurate summaries of long documents, articles, and multimedia content while preserving key information and context.',
    category: 'Summarization',
    tags: ['Summarization', 'Document Processing', 'Content Analysis'],
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400',
    useCases: ['Research papers', 'Meeting notes', 'News articles', 'Legal documents'],
    techStack: ['BERT', 'T5', 'spaCy', 'NLTK', 'Flask']
  },
  {
    id: 7,
    name: 'LinguaBot Translator',
    shortDescription: 'Multi-language translation with cultural context',
    fullDescription: 'LinguaBot Translator provides accurate, contextually-aware translations across 100+ languages with cultural nuance preservation and domain-specific terminology.',
    category: 'Translation',
    tags: ['Translation', 'Multi-language', 'Cultural Context'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
    useCases: ['Document translation', 'Real-time chat', 'Website localization', 'Legal translation'],
    techStack: ['Google Translate API', 'mBART', 'FastText', 'Django', 'MongoDB']
  },
  {
    id: 8,
    name: 'RecoEngine Smart',
    shortDescription: 'Personalized recommendation system for e-commerce',
    fullDescription: 'RecoEngine Smart delivers highly personalized product and content recommendations using advanced machine learning algorithms and user behavior analysis.',
    category: 'Recommendation',
    tags: ['Recommendation', 'Personalization', 'E-commerce'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    useCases: ['Product recommendations', 'Content curation', 'Marketing campaigns', 'Cross-selling'],
    techStack: ['Collaborative Filtering', 'TensorFlow Recommenders', 'Apache Kafka', 'Elasticsearch', 'React']
  }
];
