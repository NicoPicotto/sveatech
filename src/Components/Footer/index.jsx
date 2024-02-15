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
import { useMobile } from '../../Context/MobileContext';
import { Link as ReachLink } from 'react-router-dom';

const Footer = () => {
	const isMobile = useMobile();
	const year = new Date().getFullYear();

	return (
		<Stack
			paddingInline='2em'
			paddingBlock='4em'
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
					<Image src='/assets/img/Sveatech.svg' w='185px' alt='Logo Sveatech' />
					<Stack>
						<HStack>
							<Image src='/assets/img/location.svg' alt='Location Icon' />
							<Text fontSize='sm'>
								Pasaje Perú 13 (X5923DVA) - General Deheza - Córdoba - Argentina
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
								+54 9 3584 36-9625
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
					<Stack align={isMobile ? 'left' : 'center'} gap={10} direction='row'>
						<Link as={ReachLink} to='/nosotros'>
							<Button variant='link'>Nosotros</Button>
						</Link>
						<Link as={ReachLink} to='/servicios'>
							<Button variant='link'>Servicios</Button>
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
					justify={isMobile && 'space-between'}
				>
					<HStack spacing={5}>
						<IconButton
							bgColor='amarillo'
							isRound={true}
							size=''
							p={1}
							as='a'
							target='_blank'
							href='https://www.linkedin.com/company/sveatech-consulting/'
							icon={<Image w='15px' src='/assets/img/In.svg' />}
						/>
					</HStack>
					<Stack gap={0} align={isMobile ? 'flex-start' : 'flex-end'}>
						<Text fontSize='sm'>Sveatech © {year}.</Text>
						<Text fontSize='sm'>Todos los derechos reservados.</Text>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Footer;
