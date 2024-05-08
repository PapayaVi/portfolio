import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Reymart';

export const lastName = 'Visaya';

export const description =
	'I like working as a backend developer. I am passionate in building Web applications.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/PapayaVi' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/reymart-visaya-70a7b0257'
	},
	{
		platform: Platform.Email,
		link: 'rmvisaya10@gmail.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'express', 'bootstrap', 'nodejs', 'python', 'mysql');
