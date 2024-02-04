import {
	Stack,
	Heading,
	HStack,
	Highlight,
	Text,
	Button,
	Image,
	Link,
	useMediaQuery,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import Section from '../../Section/Section';

const Hero = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	
	return (
		<Section>
			<HStack
				bgColor='azul-2'
				borderRadius={8}
				justify='space-between'
				h={isMobile ? '100%' : '60vh'}
				paddingBlock={isMobile ? '3em' : 0}
			>
				<Stack
					w={isMobile ? '100%' : '50%'}
					paddingInline={isMobile ? '1.5em' : '3em'}
					gap={5}
				>
					<Heading
						as='h1'
						size='2xl'
						fontWeight='regular'
						letterSpacing={1}
						lineHeight={1}
					>
						<Highlight
							query={['Innovación', 'eficiencia', 'tu mano']}
							styles={{ color: 'amarillo' }}
						>
							Innovación y eficiencia al alcance de tu mano
						</Highlight>
					</Heading>
					<Text fontSize='lg'>
						Impulsando Negocios Hacia el Futuro con Soluciones Tecnológicas
						Personalizadas y de Vanguardia.
					</Text>
					<Stack direction={isMobile ? 'column' : 'row'}>
						<Link as={ReachLink} to='/servicios'>
							<Button>Nuestros servicios</Button>
						</Link>
						<Link as={ReachLink} to='/contacto'>
							<Button variant='outline'>Quiero contactarme</Button>
						</Link>
					</Stack>
				</Stack>
				<Stack
					position='relative'
					w='50%'
					h='100%'
					display={isMobile ? 'none' : 'block'}
				>
					<Image
						src='/assets/img/tablet-2.png'
						alt='celphone with charts'
						position='relative'
						mt='-2em'
						maxW='500px'
					/>
					<Image
						src='/assets/img/tablet-1.png'
						alt='celphone with charts'
						position='absolute'
						bottom={0}
						right='5em'
						maxW='450px'
						mb='-2em'
						zIndex={5}
					/>
				</Stack>
			</HStack>
		</Section>
	);
};

export default Hero;
