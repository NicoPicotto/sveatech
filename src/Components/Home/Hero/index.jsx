import {
	Stack,
	Heading,
	HStack,
	Highlight,
	Text,
	Button,
	Image,
} from '@chakra-ui/react';
import Section from '../../Section/Section';

const Hero = () => {
	return (
		<Section>
			<HStack
				bgColor='azul-2'
				borderRadius={8}
				justify='space-between'
				h='60vh'
			>
				<Stack w='50%' paddingInline='3em' gap={5}>
					<Heading as='h1' size='2xl' fontWeight='regular' letterSpacing={1}>
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
					<HStack>
						<Button>Nuestros servicios</Button>
						<Button variant='outline'>Quiero contactarme</Button>
					</HStack>
				</Stack>
				<Stack position='relative' w='50%' h='100%'>
					<Image
						src='/assets/img/tablet-2.png'
						alt='celphone with charts'
						position='relative'
						mt='-2em'
						maxW="550px"
						
						
					/>
					<Image
						src='/assets/img/tablet-1.png'
						alt='celphone with charts'
						position='absolute'
						bottom={0}
						right="5em"
						maxW="500px"
						mb="-2em"
						zIndex={5}
					/>
				</Stack>
			</HStack>
		</Section>
	);
};

export default Hero;
