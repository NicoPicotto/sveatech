import { ChakraProvider } from '@chakra-ui/react';
import theme from './Styles/theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './Views/Home';
// import ScrolToTop from './Utils/ScrollToTop';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				{/* <ScrolToTop /> */}
				<Navbar />
				<Routes>
					<Route path='/' element={<HomeView />} />
				</Routes>
			</Router>
		</ChakraProvider>
	);
};

export default App;
