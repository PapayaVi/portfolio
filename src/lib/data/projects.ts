import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'p1',
		color: '#5e95e3',
		description: 'a web-based Modified Online Transaction Integrated Bookkeeping System that helps these said processes of the company. The system is able to get data from their existing (Xendit) to collect the company’s financial data, have features of journalizing the company’s financial records for bookkeeping, and have an automated filing of BIR reports and generating the reports through PDF and excel fIles with BIR formats (such as annual tax etc.).',
		shortDescription: 'MOTIBS, based on the client’s needs, aims to provide ease to the process of bookkeeping',
		links: [{ to: 'https://github.com/PapayaVi', label: 'GitHub' }],
		logo: Assets.Sociov,
		name: 'Modified Online Transaction Integrated Bookkeeping System',
		period: {
			from: new Date(2022, 1, 1), to: new Date(2022, 4, 1)
		},
		skills: getSkills('bootstrap', 'express', 'nodejs', 'mysql', 'ejs', 'mysql', 'datatables'),
		type: 'Web-app',
		screenshots: [
			{
				label: '1',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/AIS_login.png'
			},
			{
				label: '2',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/AIS_home.png'
			},
			{
				label: '3',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/AIS_gl.png'
			},
			{
				label: '4',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/AIS_tax.png'
			},
			{
				label: '5',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/AIS_bst.png'
			},
			{
				label: '6',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/AIS_coa.png'
			},
			{
				label: '7',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/AIS_cfs.png'
			}
		]
	},
	{
		slug: 'p2',
		color: '#ff3e00',
		description:
			'The company requested a stock monitoring system to improve its monitoring process. This is due to their current means of monitoring their inventory which is only through encoding in Google Sheets which has been proven to be prone to inaccuracies and errors. The system could not only be an auxiliary to improve monitoring stocks but also could stand as decision support for the decision-makers of the company by also being a means to display the results of the analysis through a dashboarding feature',
		shortDescription:
			'Capstone project, “Prescriptive Analysis on Product Allotment with Product Threshold Forecasting”',
		links: [{ to: 'https://github.com/PapayaVi', label: 'GitHub' }],
		logo: Assets.SimlinEnterprise,
		name: 'Microtex Inventory System',
		period: {
			from: new Date(2022, 1, 31), to: new Date(2022, 12, 1)
		},
		skills: getSkills('bootstrap', 'express', 'nodejs', 'python', 'mysql', 'ejs', 'mysql', 'datatables'),
		type: 'Web-app, Dashboard',
		screenshots: [
			{
				label: '1',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/se_login.png'
			},
			{
				label: '2',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/se_inv.png'
			},
			{
				label: '3',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/se_prod.png'
			},
			{
				label: '4',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/se_prod_edit.png'
			},
			{
				label: '5',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/se_prod_stock.png'
			},
			{
				label: '6',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/se_db_desc.png'
			},
			{
				label: '7',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/se_db_forecast.png'
			}
		]
	},
	{
		slug: 'p3',
		color: '#5e95e3',
		description: 'The project aims to create a Sales Web-based Report Management System and also seeks to develop a comprehensive interactive dashboard that gives real-time insights and key performance indicators (KPIs) to help the sales departments make data-driven decisions',
		shortDescription: 'Sales-Registry, Interactive dashboard',
		links: [{ to: 'https://github.com/PapayaVi', label: 'GitHub' }],
		logo: Assets.CyberQ,
		name: 'Sales Web-based Report Management System',
		period: {
			from: new Date(2020, 11, 30), to: new Date(2021, 4, 1)
		},
		skills: getSkills('mysql', 'python', 'express', 'nodejs'),
		type: 'Web-app, Dashboard',
		screenshots: [
			{
				label: '1',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/sms_home.png'
			},
			{
				label: '2',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/sms_db.png'
			},
			{
				label: '3',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/sms_py.png'
			},
			{
				label: '4',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/sms_mysql.png'
			}
		]
		
	},
	{
		slug: 'p4',
		color: '#5e95e3',
		description: 'A side project in learning how to create/decode QR codes',
		shortDescription: 'RapidQR , QR code generator',
		links: [{ to: 'https://github.com/PapayaVi/RapidQR', label: 'GitHub' }],
		logo: Assets.OMORI,
		name: 'RapidQR',
		period: {
			from: new Date(2024, 9, 9), to: new Date(2024, 9, 15)
		},
		skills: getSkills('axios', 'express', 'nodejs'),
		type: 'Web-app, Utility',
		screenshots: [
			{
				label: '1',
				src: 'https://raw.githubusercontent.com/PapayaVi/RapidQR/main/server/public/img/demo1.png'
			},
			{
				label: '2',
				src: 'https://raw.githubusercontent.com/PapayaVi/RapidQR/main/server/public/img/demo2.png'
			},
			{
				label: '3',
				src: 'https://raw.githubusercontent.com/PapayaVi/RapidQR/main/server/public/img/demo3.png'
			},
			{
				label: '4',
				src: 'https://raw.githubusercontent.com/PapayaVi/RapidQR/main/server/public/img/demo4.png'
			}
		]
		
	},
	{
		slug: 'p5',
		color: '#5e95e3',
		description: 'A side project in learning how to shorten URLs using bitly library',
		shortDescription: 'Shortify , URL Shortener',
		links: [{ to: 'https://github.com/PapayaVi/Shortify', label: 'GitHub' }],
		logo: Assets.OMORI,
		name: 'Shortify',
		period: {
			from: new Date(2024, 9, 9), to: new Date(2024, 9, 15)
		},
		skills: getSkills('axios', 'express', 'nodejs'),
		type: 'Web-app, Utility',
		screenshots: [
			{
				label: '1',
				src: 'https://raw.githubusercontent.com/PapayaVi/Shortify/main/server/public/img/demo1.jpg'
			},
			{
				label: '2',
				src: 'https://raw.githubusercontent.com/PapayaVi/Shortify/main/server/public/img/demo2.jpg'
			}
		]
		
	}
];

export const title = 'Projects';
