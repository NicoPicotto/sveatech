import Section from '../Section/Section';
import { Stack, Heading, Text, Button, Image, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<Section paddingBlock='5em'>
			<Stack
				direction='row'
				bgColor='azul-2'
				borderRadius={8}
				align='center'
				justify='space-between'
				position='relative'
			>
				<Stack
					w='60%'
					paddingInline='3em'
					paddingBlock='2.5em'
					gap={10}
					h='100%'
				>
					<Stack gap={4} justify='center' h='100%'>
						<Heading
							as='h1'
							size='2xl'
							fontWeight='regular'
							color='amarillo'
							letterSpacing={1}
						>
							Página No Encontrada
						</Heading>
						<Text fontSize='lg'>
							Lo sentimos, la página que buscás no existe.
						</Text>
						<Link as={ReachLink} to='/'>
							<Button w='fit-content'>Volver a la página principal</Button>
						</Link>
					</Stack>
				</Stack>
				<Stack
					paddingInline='3em'
					position='sticky'
					paddingBlock='2em'
					top='1em'
				>
					<Image
						alt='Retrato de Luis'
						src='/assets/img/error-img.png'
						minW='400px'
						w='500px'
					/>
				</Stack>
			</Stack>
		</Section>
	);
};

export default ErrorPage;
