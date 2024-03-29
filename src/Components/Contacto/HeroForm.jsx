import { useState, useRef, useEffect } from 'react';
import Section from '../Section/Section';
import emailjs from '@emailjs/browser';
import {
	Stack,
	Heading,
	HStack,
	Text,
	Button,
	FormControl,
	FormLabel,
	Input,
	Select,
	Textarea,
} from '@chakra-ui/react';
import { useMobile } from '../../Context/MobileContext';

const HeroForm = () => {
	const isMobile = useMobile();
	const form = useRef();
	const [btnText, setBtnText] = useState('Enviar');
	const [selectedService, setSelectedService] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		emailjs.init(import.meta.env.VITE_EMAILJS_API_KEY);
	}, []);

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);

		const serviceMap = {
			networking: 'Networking y Conectividad',
			telefonia: 'Telefonía IP y Comunicaciones Unificadas',
			omnicanalidad: 'Soluciones de Omnicanalidad',
			cyberseguridad: 'Cyberseguridad',
			infraestructura: 'Infraestructura IT',
			modernizacion: 'Modernización de Sistemas',
			soporte: 'Soporte Operativo IT',
			video: 'Videovigilancia Profesional',
		};

		for (const param of queryParams.keys()) {
			if (serviceMap[param]) {
				setSelectedService(serviceMap[param]);
				break;
			}
		}
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();
		setIsLoading(true);

		emailjs.sendForm('service_0p46lxj', 'template_2f5dshc', form.current).then(
			(result) => {
				console.log(result.text);
				setBtnText('¡Mensaje enviado! Pronto nos pondremos en contacto.');
				setIsLoading(false);
			},
			(error) => {
				console.log(error.text);
				setBtnText('Error, por favor intenta nuevamente.');
				setIsLoading(false);
			}
		);
	};

	return (
		<Section>
			<Stack
				bgColor='azul-2'
				borderRadius={8}
				direction={isMobile ? 'column' : 'row'}
				align='flex-start'
				justify='space-between'
				position='relative'
				paddingBottom='1em'
			>
				<Stack
					w={isMobile ? '100%' : '50%'}
					paddingInline={isMobile ? '1em' : '3em'}
					paddingBlock={isMobile ? '2em' : '2.5em'}
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
							Esperamos tu mensaje
						</Heading>
						<Text fontSize='lg'>
							Completá el formulario para que podamos ponernos en contacto con
							vos y asesorarte de forma personalizada. Si preferís un contacto
							más directo podés{' '}
							<Text
								as='a'
								href='
                            https://wa.link/4z1ql4'
								target='_blank'
								textDecor='underline'
							>
								escribirnos a nuestro Whatsapp
							</Text>
							.
						</Text>
					</Stack>
				</Stack>
				<Stack
					w={isMobile ? '100%' : '50%'}
					paddingInline={isMobile ? '1em' : '3em'}
					paddingBlock={isMobile ? '1em' : '2.5em'}
					gap={10}
				>
					<form onSubmit={sendEmail} ref={form}>
						<FormControl>
							<Stack gap={15}>
								<HStack>
									<FormControl w='100%' gap={0}>
										<FormLabel>Nombre</FormLabel>
										<Input
											placeholder='Juan Pérez'
											borderColor='amarillo'
											focusBorderColor='amarillo'
											type='name'
											required
											name='user_name'
										/>
									</FormControl>
									<FormControl w='100%' gap={0}>
										<FormLabel>Email</FormLabel>
										<Input
											placeholder='juanperez@gmail.com'
											borderColor='amarillo'
											focusBorderColor='amarillo'
											type='email'
											name='user_email'
											required
										/>
									</FormControl>
								</HStack>
								<Stack gap={0}>
									<FormLabel>Servicio de interés</FormLabel>
									<Select
										placeholder='Seleccioná una opción'
										borderColor='amarillo'
										name='user_service'
										focusBorderColor='amarillo'
										value={selectedService}
										onChange={(e) => setSelectedService(e.target.value)}
									>
										<option value='Networking y Conectividad'>
											Networking y Conectividad
										</option>
										<option value='Telefonía IP y Comunicaciones Unificadas'>
											Telefonía IP y Comunicaciones Unificadas
										</option>
										<option value='Soluciones de Omnicanalidad'>
											Soluciones de Omnicanalidad
										</option>
										<option value='Cyberseguridad'>Cyberseguridad</option>
										<option value='Infraestructura IT'>
											Infraestructura IT
										</option>
										<option value='Modernización de Sistemas'>
											Modernización de Sistemas
										</option>
										<option value='Soporte Operativo IT'>
											Soporte Operativo IT
										</option>
										<option value='Videovigilancia Profesional'>
											Videovigilancia Profesional
										</option>
										<option value='Otro/s'>Otro/s</option>
									</Select>
								</Stack>
								<Stack gap={0}>
									<FormLabel>Mensaje</FormLabel>
									<Textarea
										placeholder='Quisiera contactarte por...'
										borderColor='amarillo'
										focusBorderColor='amarillo'
										name='user_message'
									/>
								</Stack>
								<Button isLoading={isLoading} name='Submit Form' type='submit'>
									{btnText}
								</Button>
							</Stack>
						</FormControl>
					</form>
				</Stack>
			</Stack>
		</Section>
	);
};

export default HeroForm;
