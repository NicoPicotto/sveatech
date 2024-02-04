/* eslint-disable react/prop-types */

import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerBody,
	Link,
	Button,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const NavMobile = ({ onClose, isOpen }) => {
	return (
		<Drawer onClose={onClose} isOpen={isOpen} size='full'>
			<DrawerOverlay />
			<DrawerContent bgColor='azul-2'>
				<DrawerCloseButton color='amarillo' fontSize="1.5rem" padding='2em' />
				<DrawerBody
					h='100%'
					alignItems='center'
					display='flex'
					justifyContent='center'
					flexDir='column'
					gap='4em'
				>
					<Link as={ReachLink} to='/' onClick={onClose}>
						<Button
							textDecor='underline'
							variant='link'
							fontSize='3xl'
							textUnderlineOffset={4}
							textDecorationColor='amarillo'
						>
							Home
						</Button>
					</Link>
					<Link as={ReachLink} to='/nosotros' onClick={onClose}>
						<Button
							textDecor='underline'
							variant='link'
							fontSize='3xl'
							textUnderlineOffset={4}
							textDecorationColor='amarillo'
						>
							Nosotros
						</Button>
					</Link>
					<Link as={ReachLink} to='/servicios' onClick={onClose}>
						<Button
							textDecor='underline'
							variant='link'
							fontSize='3xl'
							textUnderlineOffset={4}
							textDecorationColor='amarillo'
						>
							Servicios
						</Button>
					</Link>

					<Link as={ReachLink} to='/contacto' onClick={onClose}>
						<Button
							textDecor='underline'
							variant='link'
							fontSize='3xl'
							textUnderlineOffset={4}
							textDecorationColor='amarillo'
						>
							Contacto
						</Button>
					</Link>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};

export default NavMobile;
