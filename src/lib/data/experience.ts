export type Role = {
	period: string;
	title: string;
	location: string;
	tone: 'accent' | 'accent2';
	points: string[];
};

export const experience: Role[] = [
	{
		period: 'Jun — Aug 2026',
		title: 'Software Engineering Intern · NatWest Group',
		location: 'Bangalore, India',
		tone: 'accent',
		points: [
			'Developing a voice-enabled layer for an internal AI application built with Spring AI, enabling natural language interactions with enterprise banking systems.',
			'Researching small language models and federated learning for privacy-preserving, on-premise AI in HR and People workflows.',
			'Creating a central CI/CD repository of GitLab Actions templates across multiple languages, standardizing build and test pipelines.'
		]
	},
	{
		period: 'Dec 2025 — Feb 2026',
		title: 'Frontend & UI Development Intern · Mirai',
		location: 'Chennai, India',
		tone: 'accent2',
		points: [
			'Built the responsive interface for the company MVP in Next.js, holding up across every device class.',
			'Migrated image storage from base-64 strings to blob storage, cutting load times significantly.',
			'Led full-stack integration with the FastAPI backend to enable dynamic data flow.'
		]
	}
];
