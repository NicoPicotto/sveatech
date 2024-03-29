import Section from '../../Section/Section';
import {
	Stack,
	Grid,
	GridItem,
	Heading,
	Text,
	HStack,
	Image,
	Highlight,
	
} from '@chakra-ui/react';
import data from './data';
import { useMobile } from '../../../Context/MobileContext';

const Valores = () => {
	const isMobile = useMobile();
	return (
		<Section bgColor='azul-2'>
			<Stack paddingBlock='3em' paddingInline={isMobile ? '0' : '3em'}>
				<Heading
					mb='1em'
					textAlign='center'
					size='2xl'
					fontWeight='regular'
					letterSpacing={1}
				>
					<Highlight
						query='valores'
						styles={{
							color: 'amarillo',
						}}
					>
						Los valores que nos definen.
					</Highlight>
				</Heading>
				<Grid
					templateColumns={isMobile ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)'}
					gap={4}
				>
					{data &&
						data.map((item) => (
							<GridItem key={item.titulo}>
								<Stack
									bgColor='rgba(255, 255, 255, 0.1)'
									borderRadius={8}
									paddingBlock='1.5em'
									paddingInline='2em'
									h='100%'
								>
									<HStack>
										<Image src={item.icon} alt={`Icono valor ${item.titulo}`} />
										<Heading as='h3' fontSize='2xl' fontWeight='regular'>
											{item.titulo}
										</Heading>
									</HStack>

									<Text>{item.texto}</Text>
								</Stack>
							</GridItem>
						))}
				</Grid>
			</Stack>
		</Section>
	);
};

export default Valores;
