import Section from '../Section/Section';
import { Stack, Heading, Text, Button, Image, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { useMobile } from '../../Context/MobileContext';

const ErrorPage = () => {
	const isMobile = useMobile();
	return (
		<Section paddingBlock='5em'>
			<Stack
				direction={isMobile ? 'column' : 'row'}
				bgColor='azul-2'
				borderRadius={8}
				align='center'
				justify='space-between'
				position='relative'
			>
				<Stack
					w={isMobile ? '100%' : '60%'}
					paddingInline={isMobile ? '1em' : '3em'}
					paddingBlock={isMobile ? '2em' : '2.5em'}
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
							<Button w={isMobile ? '100%' : 'fit-content'}>
								Volver a la página principal
							</Button>
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
						minW={!isMobile && '400px'}
						w={isMobile ? "300px" : '500px'}
					/>
				</Stack>
			</Stack>
		</Section>
	);
};

export default ErrorPage;
