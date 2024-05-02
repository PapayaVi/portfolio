import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'A-software-coursework',
		company: 'Sociov',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.Coursework,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2022, 1, 1), to: new Date(2022, 4, 1) },
		skills: getSkills('html', 'js', 'css', 'express','bootstrap','mysql','nodejs'),
		name: 'Lead Software Developer',
		color: 'cyan',
		links: [],
		logo: Assets.Sociov,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'B-software-coursework',
		company: 'Microtex Simlin Enterprise',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Coursework,
		type: 'Software Development',
		location: 'Hybrid',
		period: { from: new Date(2022, 1, 31), to: new Date(2022, 12, 1) },
		skills: getSkills('html', 'js', 'css', 'express','bootstrap','mysql','nodejs'),
		name: 'Software Developer',
		color: 'red',
		links: [],
		logo: Assets.SimlinEnterprise,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'A-software-internship',
		company: 'CyberQ Group',
		description: 'Created an Interactive Dashboard.',
		contract: ContractType.Internship,
		type: 'Data Visualization',
		location: 'Remote',
		period: { from: new Date(2020, 11, 30), to: new Date(2021, 4, 1) },
		skills: getSkills('python', 'numpy', 'pandas'),
		name: 'PowerBI developer',
		color: 'blue',
		links: [],
		logo: Assets.CyberQ,
		shortDescription: 'Created an Interactive Dashboard.'
	}
];

export const title = 'Experience';
