export type Role = {
	period: string;
	title: string;
	/** The employer, set as the card's heading. */
	org: string;
	/** The job title on its own, without the employer. */
	position: string;
	location: string;
	tone: 'accent' | 'accent2';
	points: string[];
};

export const experience: Role[] = [
	{
		period: 'Jun — Aug 2026',
		title: 'Software Engineering Intern · NatWest Group',
		org: 'NatWest Group',
		position: 'Software Engineering Intern',
		location: 'Bangalore, India',
		tone: 'accent',
		points: [
			'Built a voice-enabled layer for an internal AI application on Spring AI, letting staff query enterprise banking systems in natural language.',
			'Researched small language models and federated learning for privacy-preserving, on-premise AI in HR and People workflows.',
			'Created a central CI/CD repository of GitLab Actions templates across several languages, standardizing build and test pipelines for other teams.'
		]
	},
	{
		period: 'Dec 2025 — Feb 2026',
		title: 'Frontend & UI Development Intern · Mirai',
		org: 'Mirai',
		position: 'Frontend & UI Development Intern',
		location: 'Chennai, India',
		tone: 'accent2',
		points: [
			'Built the responsive interface for the company MVP in Next.js, holding up across every device class.',
			'Migrated image storage from base-64 strings to blob storage, cutting load times significantly.',
			'Led full-stack integration with the FastAPI backend to enable dynamic data flow.'
		]
	}
];
