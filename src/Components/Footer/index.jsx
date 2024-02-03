import {
	HStack,
	Text,
	Stack,
	Image,
	Divider,
	Link,
	Button,
	IconButton,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const Footer = () => {
	return (
		<Stack
			paddingInline='2em'
			paddingBlock='6em'
			align='center'
			bgColor='azul-2'
		>
			<HStack w='100%' maxW='1280px' align='center' justify='space-between'>
				<Stack spacing={5} w='40%'>
					<Image src='/assets/img/Sveatech.svg' w='185px' />
					<Stack>
						<HStack>
							<Image src='/assets/img/location.svg' alt='Location Icon' />
							<Text fontSize='sm'>
								Calle Falsa 123, General Deheza, Córdoba, Argentina.
							</Text>
						</HStack>
						<HStack>
							<Image src='/assets/img/tel.svg' alt='Telephone Icon' />

							<Text
								as='a'
								href='
                            https://wa.link/4z1ql4'
								fontSize='sm'
								target='_blank'
							>
								(0358) - 4056399
							</Text>
						</HStack>
					</Stack>
				</Stack>

				<Divider
					borderWidth={1}
					borderColor='amarillo'
					orientation='vertical'
					minH='100px'
				/>

				<Stack direction='row' w='35%' justify='center' spacing={20}>
					<Stack align='center'>
						<Link as={ReachLink} to='/nosotros'>
							<Button variant='link'>Nosotros</Button>
						</Link>
						<Link as={ReachLink} to='/servicios'>
							<Button variant='link'>Servicios</Button>
						</Link>
					</Stack>

					<Stack align='center'>
						<Link as={ReachLink} to='/experiencia'>
							<Button variant='link'>Experiencia</Button>
						</Link>

						<Link as={ReachLink} to='/contacto'>
							<Button variant='link'>Contacto</Button>
						</Link>
					</Stack>
				</Stack>
				<Divider
					borderWidth={1}
					borderColor='amarillo'
					orientation='vertical'
					minH='100px'
				/>
				<Stack w='25%' align='flex-end' gap={3}>
					<HStack spacing={5}>
						<IconButton
							bgColor='amarillo'
							isRound={true}
							size=''
							p={1}
							icon={<Image w='15px' src='/assets/img/In.svg' />}
						/>
					</HStack>
					<Stack gap={0} align='flex-end'>
						<Text fontSize='sm'>Sveatech © 2024.</Text>
						<Text fontSize='sm'>Todos los derechos reservados.</Text>
					</Stack>
				</Stack>
			</HStack>
		</Stack>
	);
};

export default Footer;
