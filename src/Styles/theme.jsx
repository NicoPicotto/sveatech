import { extendTheme } from '@chakra-ui/react';

const colors = {
	natural: '#F0EFF4',
	'azul-1': '#8A7DD8',
	'azul-2': '#08233d',
	amarillo: '#FFCB00',
	fondo: '#031323',
};

const fonts = {
	body: `'Noto Sans TC Variable', sans-serif;`,
	heading: `'Paytone One', sans-serif`,
};

const styles = {
	global: {
		// Estilos globales
		'html, body': {
			backgroundColor: colors.fondo,
			color: colors.natural,
			fontSize: '16px',
		},
	},
};

const components = {
	Heading: {
		color: colors.natural,
	},
	Text: {
		color: colors.natural,
	},
	Button: {
		// Estilos base para todos los botones
		baseStyle: {
			color: colors.natural,
			transition: '0.1s ease-in',
		},
		// Variantes
		variants: {
			// Variante Solid
			solid: {
				bg: colors.amarillo,
				color: colors.fondo,
				_hover: {
					bg: '#deb100',
				},
			},
			// Variante Outline
			outline: {
				border: '1px solid',
				borderColor: colors.amarillo,
				color: colors.natural,
				_hover: {
					bg: colors.amarillo,
					color: colors.fondo,
				},
			},
			// Variante Ghost
			ghost: {
				color: 'teal.500',
				_hover: {
					bg: 'teal.100',
				},
			},
			// Variante Link
			link: {
				color: colors.natural,
				textDecorationColor: colors.amarillo,
				_hover: {
					textDecoration: 'underline',
					textUnderlineOffset: 4,
					textDecorationColor: colors.amarillo,
				},
			},
		},
	},
};

const theme = extendTheme({ colors, fonts, styles, components });

export default theme;
