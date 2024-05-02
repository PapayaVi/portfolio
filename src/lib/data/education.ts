import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor of Science in Information Systems - Major in Business Analytics',
		description: '',
		location: 'Manila',
		logo: Assets.Ust,
		name: '',
		organization: 'University of Santo Tomas',
		period: { from: new Date(2019, 7, 31), to: new Date(2023, 7, 30) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['PowerBI', 'Python', 'Javascript', 'Java', 'English']
	}
];

export const title = 'Education';
