import { HStack, Link, Stack, Image, Button } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<Stack paddingInline='2em' paddingTop='2em' align='center'>
			<HStack w='100%' maxW='1280px' align='center' justify='space-between'>
				<Image src='/assets/img/Sveatech.svg' w='185px' />
				<HStack gap={10}>
					<Link as={ReachLink} to='/nosotros'>
						<Button variant='link'>Nosotros</Button>
					</Link>
					<Link as={ReachLink} to='/servicios'>
						<Button variant='link'>Servicios</Button>
					</Link>
					<Link as={ReachLink} to='/experiencia'>
						<Button variant='link'>Experiencia</Button>
					</Link>
					<Link as={ReachLink} to='/blog'>
						<Button variant='link'>Blog</Button>
					</Link>
					<Link as={ReachLink} to='/contacto'>
						<Button variant='link'>Contacto</Button>
					</Link>
				</HStack>
			</HStack>
		</Stack>
	);
};

export default Navbar;
