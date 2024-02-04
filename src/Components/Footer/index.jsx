import {
	HStack,
	Text,
	Stack,
	Image,
	Divider,
	Link,
	Button,
	IconButton,
	useMediaQuery,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const Footer = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	return (
		<Stack
			paddingInline='2em'
			paddingBlock='6em'
			align='center'
			bgColor='azul-2'
		>
			<Stack
				direction={isMobile ? 'column' : 'row'}
				w='100%'
				maxW='1280px'
				align='center'
				spacing={isMobile && 30}
				justify='space-between'
			>
				<Stack spacing={5} w={isMobile ? '100%' : '40%'}>
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
					orientation={isMobile ? 'horizontal' : 'vertical'}
					minH={!isMobile && '100px'}
				/>

				<Stack
					direction={isMobile ? 'column' : 'row'}
					w={isMobile ? '100%' : '35%'}
					justify='center'
					spacing={isMobile ? 5 : 30}
				>
					<Stack align={isMobile ? 'left' : 'center'} spacing={isMobile && 5}>
						<Link as={ReachLink} to='/nosotros'>
							<Button variant='link'>Nosotros</Button>
						</Link>
						<Link as={ReachLink} to='/servicios'>
							<Button variant='link'>Servicios</Button>
						</Link>
					</Stack>

					<Stack align={isMobile ? 'left' : 'center'} spacing={isMobile && 5}>
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
					orientation={isMobile ? 'horizontal' : 'vertical'}
					minH={!isMobile && '100px'}
				/>
				<Stack
					w={isMobile ? '100%' : '25%'}
					align={isMobile ? 'flex-start' : 'flex-end'}
					gap={3}
					direction={isMobile ? 'row' : 'column'}
					justify={isMobile && 'space-between'}
				>
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
			</Stack>
		</Stack>
	);
};

export default Footer;
