export type SkillGroup = {
	label: string;
	tone: 'neutral' | 'accent' | 'accent2';
	items: string[];
};

export const skills: SkillGroup[] = [
	{
		label: 'Languages',
		tone: 'neutral',
		items: [
			'Java',
			'Python',
			'C/C++',
			'SQL (PostgreSQL, MySQL)',
			'JavaScript',
			'TypeScript',
			'HTML/CSS',
			'R'
		]
	},
	{
		label: 'Frameworks & Tools',
		tone: 'accent2',
		items: ['React', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'Flask', 'Streamlit']
	},
	{
		label: 'AI/ML & LLM',
		tone: 'accent',
		items: [
			'LangChain',
			'LangGraph',
			'RAG (Retrieval-Augmented Generation)',
			'Rasa',
			'OpenAI API',
			'Google Gemini',
			'Ollama'
		]
	},
	{
		label: 'Databases & Vector Stores',
		tone: 'accent2',
		items: ['MongoDB', 'Firebase', 'DynamoDB', 'Qdrant', 'ChromaDB']
	},
	{
		label: 'Cloud & DevOps',
		tone: 'accent2',
		items: [
			'AWS (S3, Lambda, API Gateway, DynamoDB, SQS, SES, CloudFront, Cognito)',
			'Docker',
			'Git'
		]
	},
	{
		label: 'Libraries',
		tone: 'neutral',
		items: ['pandas', 'NumPy', 'Matplotlib', 'scikit-learn', 'PyTorch', 'TensorFlow']
	}
];
