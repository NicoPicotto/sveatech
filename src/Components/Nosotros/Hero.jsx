import Section from '../Section/Section';
import {
	Stack,
	Heading,
	Text,
	Button,
	ListIcon,
	Image,
	List,
	ListItem,
	Link,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useMobile } from '../../Context/MobileContext';

const Hero = () => {
	const isMobile = useMobile();
	return (
		<Section paddingBlock='5em'>
			<Stack
				bgColor='azul-2'
				borderRadius={8}
				direction={isMobile ? 'column' : 'row'}
				align='flex-start'
				justify='space-between'
				position='relative'
			>
				<Stack
					w={isMobile ? '100%' : '50%'}
					paddingInline={isMobile ? '1em' : '3em'}
					paddingBlock='2.5em'
					gap={10}
				>
					<Stack>
						<Heading
							maxW='20ch'
							as='h1'
							size='2xl'
							fontWeight='regular'
							color='amarillo'
							letterSpacing={1}
						>
							Nosotros
						</Heading>
						<Text fontSize='lg' textAlign='justify'>
							En Sveatech Consulting, somos un grupo de apasionados por la
							tecnología y la innovación, comprometidos con llevar a nuestros
							clientes al próximo nivel. Con una vasta experiencia en el rubro
							IT, destacamos por entender a fondo las necesidades y desafíos
							tecnológicos actuales, brindando soluciones que no solo resuelven
							problemas complejos sino que también promueven el crecimiento y la
							eficiencia.
						</Text>
					</Stack>
					<Stack>
						<Heading
							maxW='20ch'
							as='h2'
							size='lg'
							fontWeight='regular'
							color='amarillo'
							letterSpacing={1}
						>
							Nuestra Misión
						</Heading>
						<Text fontSize='lg' textAlign='justify'>
							En Sveatech Consulting, somos un grupo de apasionados por la
							tecnología y la innovación, comprometidos con llevar a nuestros
							clientes al próximo nivel. Con una vasta experiencia en el rubro
							IT, destacamos por entender a fondo las necesidades y desafíos
							tecnológicos actuales, brindando soluciones que no solo resuelven
							problemas complejos sino que también promueven el crecimiento y la
							eficiencia.
						</Text>
					</Stack>
					<Stack>
						<Heading
							maxW='20ch'
							as='h2'
							size='lg'
							fontWeight='regular'
							color='amarillo'
							letterSpacing={1}
						>
							Nuestra Visión
						</Heading>
						<Text fontSize='lg' textAlign='justify'>
							Convertirnos en referentes dentro de la consultoría IT,
							reconocidos por nuestra excelencia, innovación y dedicación al
							éxito de nuestros clientes. Nuestro objetivo es redefinir los
							estándares de la industria, impulsando soluciones tecnológicas
							efectivas y sustentables.
						</Text>
					</Stack>
					<Stack>
						<Heading
							maxW='20ch'
							as='h2'
							size='lg'
							fontWeight='regular'
							color='amarillo'
							letterSpacing={1}
						>
							Nuestros Valores
						</Heading>
						<List spacing={4}>
							<ListItem flexDirection='row' textAlign='justify'>
								<ListIcon as={CheckCircleIcon} color='amarillo' />
								Innovación: Buscamos constantemente formas creativas de superar
								los desafíos tecnológicos.
							</ListItem>
							<ListItem flexDirection='row' textAlign='justify'>
								<ListIcon as={CheckCircleIcon} color='amarillo' />
								Excelencia: Estamos comprometidos a entregar la mejor calidad en
								todo lo que hacemos.
							</ListItem>
							<ListItem flexDirection='row' textAlign='justify'>
								<ListIcon as={CheckCircleIcon} color='amarillo' />
								Integridad: Actuamos con honestidad y transparencia,
								construyendo relaciones de confianza.
							</ListItem>
							<ListItem flexDirection='row' textAlign='justify'>
								<ListIcon as={CheckCircleIcon} color='amarillo' />
								Compromiso con el Cliente: Las necesidades de nuestros clientes
								son nuestra prioridad. Nos enfocamos en ofrecer soluciones a
								medida y eficaces.
							</ListItem>
							<ListItem flexDirection='row' textAlign='justify'>
								<ListIcon as={CheckCircleIcon} color='amarillo' />
								Colaboración: Creemos en el poder del trabajo en equipo para
								generar ideas innovadoras y alcanzar resultados sobresalientes.
							</ListItem>
						</List>
					</Stack>
					<Link as={ReachLink} to='/contacto'>
						<Button w={isMobile ? '100%' : 'fit-content'}>
							Quiero Contactarme
						</Button>
					</Link>
				</Stack>
				<Stack
					paddingInline='3em'
					display={isMobile ? 'none' : 'block'}
					position='sticky'
					paddingBlock='2em'
					top='1em'
				>
					<Image
						alt='Retrato de Luis'
						src='/assets/img/retrato-luis.png'
						minW='400px'
						w='500px'
					/>
				</Stack>
			</Stack>
		</Section>
	);
};

export default Hero;
