export const site = {
	name: 'Souparno Nag',
	role: 'Backend and applied AI · India',
	tagline: 'I build backend systems, and the AI that sits on top of them.',
	// The stamp on the hero card.
	availability: 'Open to SDE and AI/ML roles',
	// Listed at the foot of the hero card, the way a catalogue card lists subjects.
	subjects: ['Distributed systems', 'Applied AI', 'Backend engineering'],
	// Dewey class for distributed processing, plus the surname.
	callNumber: '004.36 NAG',
	intro:
		'I’m in my final year of computer science at VIT Chennai. Last summer I interned at NatWest Group, where I built a voice layer for an internal AI system and looked into running models on-premise, for data that can’t leave the building. On my own time I mostly build backend things. So far that’s a distributed cache in Go, a ticket marketplace that runs on Kafka, and a few retrieval pipelines where I cared most about getting the right passage back.',
	// Shown in search results and link previews.
	description:
		'Souparno Nag — final-year computer science student at VIT Chennai working on distributed systems and applied AI. Previously a software engineering intern at NatWest Group.',
	seoTitle: 'Souparno Nag — Backend and applied AI',
	jobTitle: 'Software Engineer',
	url: 'https://souparno-nag.netlify.app',
	email: 'souparnonag2004@gmail.com',
	phone: { display: '+91 82402 04932', href: '+918240204932' },
	cv: '/Souparno-Nag-CV.pdf',
	links: {
		github: 'https://github.com/souparno-nag',
		linkedin: 'https://www.linkedin.com/in/souparno-nag-10994228b/',
		leetcode: 'https://leetcode.com/u/bluephoenix04/'
	}
} as const;
