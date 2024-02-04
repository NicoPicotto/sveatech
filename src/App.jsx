import { ChakraProvider } from '@chakra-ui/react';
import theme from './Styles/theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './Views/Home';
import ScrolToTop from './Utils/ScrollToTop';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import NosotrosView from './Views/Nosotros';
import ServiciosView from './Views/Servicios';
import ErrorView from './Views/404';
import ContactoView from './Views/Contacto';
import { MobileProvider } from './Context/MobileContext';

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<MobileProvider>
				<Router>
					<ScrolToTop />
					<Navbar />
					<Routes>
						<Route path='/' element={<HomeView />} />
						<Route path='/nosotros' element={<NosotrosView />} />
						<Route path='/servicios' element={<ServiciosView />} />
						<Route path='/contacto' element={<ContactoView />} />
						<Route path='*' element={<ErrorView />} />
					</Routes>
					<Footer />
				</Router>
			</MobileProvider>
		</ChakraProvider>
	);
};

export default App;
