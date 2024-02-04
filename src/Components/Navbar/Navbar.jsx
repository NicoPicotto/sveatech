import {
	HStack,
	Link,
	Stack,
	Image,
	Button,
	useDisclosure,
	IconButton,
	useMediaQuery,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';
import NavMobile from './NavMobile';

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack paddingInline='2em' paddingTop='2em' align='center'>
			<HStack w='100%' maxW='1280px' align='center' justify='space-between'>
				<Link as={ReachLink} to='/'>
					<Image src='/assets/img/Sveatech.svg' w='185px' />
				</Link>
				<HStack gap={10}>
					<Link
						as={ReachLink}
						to='/nosotros'
						display={isMobile ? 'none' : 'block'}
					>
						<Button variant='link'>Nosotros</Button>
					</Link>
					<Link
						as={ReachLink}
						to='/servicios'
						display={isMobile ? 'none' : 'block'}
					>
						<Button variant='link'>Servicios</Button>
					</Link>

					<Link
						as={ReachLink}
						to='/contacto'
						display={isMobile ? 'none' : 'block'}
						zIndex={100}
					>
						<Button variant='link'>Contacto</Button>
					</Link>
					{isMobile && (
						<IconButton
							color='amarillo'
							variant='ghost'
							icon={<Bars3Icon />}
							onClick={onOpen}
							_hover={{ bgColor: 'transparent' }}
						/>
					)}
				</HStack>
			</HStack>
			<NavMobile onClose={onClose} isOpen={isOpen} />
		</Stack>
	);
};

export default Navbar;
