export type Achievement = {
	/** What kind of entry this is; printed at the top of the card. */
	label: string;
	title: string;
	body: string;
};

export const achievements: Achievement[] = [
	{
		label: 'Publication',
		title: 'Published in Results in Engineering (Elsevier)',
		body: '“A hierarchical ensemble machine learning framework for precision survival prediction in breast cancer using SEER data.”'
	},
	{
		label: 'Rank',
		title: 'Ranked 1st, then 4th in branch',
		body: 'First in Electronics and Communications in year one; fourth in Computer Science in year two, VIT Chennai.'
	},
	{
		label: 'Education',
		title: 'B.Tech Computer Science, VIT',
		body: 'Aug 2023 – present, CGPA 9.37. Research internship on breast cancer survival prediction; built VBOT, the institutional RAG chatbot.'
	}
];
