import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'A-software-coursework',
		company: 'Sociov',
		description: 'My first experience and starting point as a developer, software engineering course. Most of the time was spent on learning and staying focused trying to meet deadlines and succesfully implementing features based on the clients request.',
		contract: ContractType.Coursework,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2022, 1, 1), to: new Date(2022, 4, 1) },
		skills: getSkills('html', 'js', 'css', 'mysql','nodejs', 'datatables', 'ejs'),
		name: 'Lead Software Developer, Team',
		color: 'cyan',
		links: [],
		logo: Assets.Sociov,
		shortDescription: 'Starting point as a developer...',


	},
	{
		slug: 'B-software-coursework',
		company: 'Microtex Simlin Enterprise',
		description: 'This project was a great experience. A lot of repetetive tasks in data analysis and mysql query configuration, but also a lot of learning opportunities both for Web app, and PowerBI development.',
		contract: ContractType.Coursework,
		type: 'Software Development',
		location: 'Hybrid',
		period: { from: new Date(2022, 1, 31), to: new Date(2022, 12, 1) },
		skills: getSkills('html', 'js', 'css', 'bootstrap','mysql','nodejs','python','pandas'),
		name: 'Software Developer, Team',
		color: 'red',
		links: [],
		logo: Assets.SimlinEnterprise,
		shortDescription: 'This project was a great experience...',

	},
	{
		slug: 'A-software-internship',
		company: 'CyberQ Group',
		description: 'This project proved to be the most exciting for me. Apply everything i have learned, best practices, and my own creativity.',
		contract: ContractType.Internship,
		type: 'Data Visualization',
		location: 'Remote',
		period: { from: new Date(2020, 11, 30), to: new Date(2021, 4, 1) },
		skills: getSkills('python', 'numpy', 'pandas'),
		name: 'PowerBI developer, Team',
		color: 'blue',
		links: [],
		logo: Assets.CyberQ,
		shortDescription: 'Sales Interactive Dashboard. This project proved to be the most exciting for me...'
	}
];

export const title = 'Experience';
