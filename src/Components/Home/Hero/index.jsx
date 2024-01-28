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
				minH='60vh'
				marginBlock='6em'
			>
				<Stack w='50%' paddingInline='3em' gap={5}>
					<Heading maxW='20ch' as='h1' size='2xl' fontWeight="regular" letterSpacing={1}>
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
						src='/assets/img/91376.png'
						alt='celphone with charts'
						position='relative'
						mt='-6em'
						zIndex={5}
					/>
					<Image
						src='/assets/img/91377.png'
						alt='celphone with charts'
						position='absolute'
						bottom={0}
						h='100%'
						left='20%'
						top='20%'
					/>
				</Stack>
			</HStack>
		</Section>
	);
};

export default Hero;
