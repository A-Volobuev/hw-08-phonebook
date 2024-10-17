import { createTheme } from '@mui/material';

export const theme = createTheme({
		color:{
			title: '#0E1721',
			main: '#1F3349',
			whiteText: '#FFFFFF',
			whiteBg: '#FFFFFF',
			black: '#000000',
			secondaryText: '#7F8E9D',
			numbersText: '#313541',
			loginProfileText: '#1A1A1A',
			primary: '#4CC6F5',
			tableRow: '#ECF1F3',
			active: '#4CC6F5',
			hoverButton: '#28ABDD',
			authInput: '#A8A8A8',
		},
		space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
		fontSizes: {
			xs: '10px',
			s: '12px',
			n: '14px',
			m: '16px',
			auth: '17px',
			l: '18px',
			xl: '30px',
	},
	fontWeights: {
		n: 400,
		m: 600,
		l: 700,
	},
	radii: {
		none: '0',
		s: '3px',
		input: '6px',
		button: '6px',
		n: '8px',
		r: '50%',
	},
	lineHeights: {
		xs: '12.1px',
		s: '14.52px',
		n: '16.94px',
		button: '18px',
		authInput: '18px',
		m: '19.18px',
		auth: '20.4px',
		l: '21.78px',
	},
	}
)