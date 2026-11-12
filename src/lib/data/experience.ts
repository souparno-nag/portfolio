export type Role = {
	period: string;
	/** The employer, set as the card's heading. */
	org: string;
	position: string;
	location: string;
	points: string[];
};

export const experience: Role[] = [
	{
		period: 'Jun — Aug 2026',
		org: 'NatWest Group',
		position: 'Software Engineering Intern',
		location: 'Bangalore, India',
		points: [
			'Built a voice-enabled layer for an internal AI application on Spring AI, letting staff query enterprise banking systems in natural language.',
			'Researched small language models and federated learning for privacy-preserving, on-premise AI in HR and People workflows.',
			'Created a central CI/CD repository of GitLab Actions templates across several languages, standardizing build and test pipelines for other teams.'
		]
	},
	{
		period: 'Dec 2025 — Feb 2026',
		org: 'Mirai',
		position: 'Frontend & UI Development Intern',
		location: 'Chennai, India',
		points: [
			'Built the responsive interface for the company MVP in Next.js, holding up across every device class.',
			'Migrated image storage from base-64 strings to blob storage, cutting load times significantly.',
			'Led full-stack integration with the FastAPI backend to enable dynamic data flow.'
		]
	}
];
