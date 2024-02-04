/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';
import { useMediaQuery } from '@chakra-ui/react';

// Crear el contexto
const MobileContext = createContext();

// Provider en tu componente de alto nivel
export const MobileProvider = ({ children }) => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
	);
};

// Hook personalizado para usar el contexto
export const useMobile = () => useContext(MobileContext);
