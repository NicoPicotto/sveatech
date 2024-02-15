import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
	plugins: [
		react(),
		createHtmlPlugin({
			inject: {
				data: {
					title: 'Sveatech ©',
					metaTags: `
            <meta name="description" content="Impulsando Negocios Hacia el Futuro con Soluciones Tecnológicas Personalizadas y de Vanguardia.">
            <meta name="keywords" content="cyberseguridad, infraestructura, network, conectividad, omnicanalidad, redes, cloud, automatización">
            <meta property="og:title" content="Sveatech Consulting">
            <meta property="og:description" content="Impulsando Negocios Hacia el Futuro con Soluciones Tecnológicas Personalizadas y de Vanguardia.">
            <meta property="og:image" content="/opengraph-image.jpg">
            <meta property="og:type" content="website">
          `,
				},
			},
		}),
	],
	base: '/',
});
