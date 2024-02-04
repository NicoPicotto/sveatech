import {
	HStack,
	Link,
	Stack,
	Image,
	Button,
	useDisclosure,
	IconButton,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';
import NavMobile from './NavMobile';
import { useMobile } from '../../Context/MobileContext';

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const isMobile = useMobile();

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
							color='#FFCB00'
							variant='ghost'
							className='menu-icon'
							icon={<Bars3Icon color='#FFCB00' />}
							onClick={onOpen}
							bgColor='transparent'
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
