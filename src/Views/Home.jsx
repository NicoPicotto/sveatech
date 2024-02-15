import { useEffect } from 'react';
import Hero from '../Components/Home/Hero';
import Servicios from '../Components/Home/Servicios';
import Valores from '../Components/Home/Valores';
import Lenis from '@studio-freight/lenis';

const HomeView = () => {

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<Hero />
			<Valores />
			<Servicios />
		</>
	);
};

export default HomeView;
