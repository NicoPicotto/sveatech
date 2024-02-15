import Section from '../../Section/Section';
import {
	Heading,
	List,
	ListItem,
	Button,
	Stack,
	ListIcon,
	Highlight,
	Image,
	Link,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMobile } from '../../../Context/MobileContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.css';

// import required modules
import { Mousewheel, Navigation, Autoplay } from 'swiper/modules';

import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const Servicios = () => {
	const isMobile = useMobile();

	return (
		<Section>
			<Heading
				mb='1em'
				textAlign='center'
				size='2xl'
				fontWeight='regular'
				letterSpacing={1}
			>
				<Highlight
					query={['excelencia', 'a medida']}
					styles={{
						color: 'amarillo',
					}}
				>
					Servicios de excelencia y a medida.
				</Highlight>
			</Heading>
			<Swiper
				direction={'horizontal'}
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 5000,
					pauseOnMouseEnter: true,
				}}
				spaceBetween={5}
				mousewheel={isMobile ? false : true}
				navigation={true}
				grabCursor={true}
				modules={[Mousewheel, Navigation, Autoplay]}
				className='mySwiper'
			>
				<SwiperSlide>
					<Stack
						borderRadius={8}
						direction={isMobile ? 'column-reverse' : 'row'}
						gap={0}
						height='100%'
						overflow='hidden'
						bgColor='azul-2'
					>
						<Stack
							paddingBlock='2em'
							paddingInline={isMobile ? '1.5em' : '2.5em'}
							h='100%'
							w={isMobile ? '100%' : '60%'}
							gap={5}
						>
							<Heading
								fontSize='3xl'
								as='h3'
								color='amarillo'
								fontWeight='regular'
								letterSpacing={1}
							>
								Networking y Conectividad
							</Heading>
							<List spacing={5} flex={1}>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Diseño de Redes'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Diseño de Redes: Desarrollo de soluciones de red
										personalizadas para optimizar rendimiento y seguridad,
										incluyendo redes LAN y WLAN adaptadas a las necesidades
										específicas de cada cliente.
									</Highlight>
								</ListItem>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Gestión de Redes'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Gestión de Redes: Administración y monitoreo avanzado de
										redes para garantizar un rendimiento óptimo y seguridad
										robusta, incluyendo soluciones para la gestión eficiente del
										tráfico y balanceo de carga.
									</Highlight>
								</ListItem>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Soluciones de Conectividad'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Soluciones de Conectividad: Implementación de soluciones de
										avanzadas, incluyendo VPNs.
									</Highlight>
								</ListItem>
							</List>
							<Link as={ReachLink} to='/servicios'>
								<Button
									w='fit-content'
									rightIcon={<ArrowRightIcon style={{ height: '15px' }} />}
								>
									Ver más
								</Button>
							</Link>
						</Stack>
						<Stack
							position='relative'
							w={isMobile ? '100%' : '40%'}
							overflow='hidden'
						>
							<Image
								objectFit='cover'
								h='100%'
								alt='Imagen referente a networking y Conectividad'
								objectPosition='right'
								src='/assets/img/servicios-lan.png'
							/>
						</Stack>
					</Stack>
				</SwiperSlide>
				<SwiperSlide>
					<Stack
						borderRadius={8}
						direction={isMobile ? 'column-reverse' : 'row'}
						gap={0}
						height='100%'
						overflow='hidden'
						bgColor='azul-2'
					>
						<Stack
							paddingBlock='2em'
							paddingInline={isMobile ? '1.5em' : '2.5em'}
							h='100%'
							w={isMobile ? '100%' : '60%'}
							gap={5}
						>
							<Heading
								fontSize='3xl'
								as='h3'
								color='amarillo'
								fontWeight='regular'
								letterSpacing={1}
							>
								Telefonía IP y Comunicaciones Unificadas
							</Heading>
							<List spacing={5} flex={1}>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Telefonía IP'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Telefonía IP: Implementación de sistemas de telefonía IP
										para comunicaciones internas y externas eficientes y
										económicas, utilizando la infraestructura de red existente.
									</Highlight>
								</ListItem>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Comunicaciones Unificadas'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Comunicaciones Unificadas: Soluciones integrales que
										combinan voz, video, mensajería y colaboración para
										facilitar una comunicación fluida dentro de la organización.
									</Highlight>
								</ListItem>
							</List>
							<Link as={ReachLink} to='/servicios'>
								<Button
									w='fit-content'
									rightIcon={<ArrowRightIcon style={{ height: '15px' }} />}
								>
									Ver más
								</Button>
							</Link>
						</Stack>
						<Stack
							position='relative'
							w={isMobile ? '100%' : '40%'}
							overflow='hidden'
						>
							<Image
								objectFit='cover'
								alt='Imagen referente a Telefonía IP y Comunicaciones Unificadas'
								h='100%'
								src='/assets/img/servicios-tel.png'
							/>
						</Stack>
					</Stack>
				</SwiperSlide>
				<SwiperSlide>
					<Stack
						borderRadius={8}
						direction={isMobile ? 'column-reverse' : 'row'}
						gap={0}
						height='100%'
						overflow='hidden'
						bgColor='azul-2'
					>
						<Stack
							paddingBlock='2em'
							paddingInline={isMobile ? '1.5em' : '2.5em'}
							h='100%'
							w={isMobile ? '100%' : '60%'}
							gap={5}
						>
							<Heading
								fontSize='3xl'
								as='h3'
								color='amarillo'
								fontWeight='regular'
								letterSpacing={1}
							>
								Soluciones de Omnicanalidad
							</Heading>
							<List spacing={5} flex={1}>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Estrategias de Omnicanalidad'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Estrategias de Omnicanalidad: Desarrollo e implementación de
										estrategias para proporcionar una experiencia de cliente
										coherente y unificada a través de múltiples canales de
										comunicación.
									</Highlight>
								</ListItem>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Integración de Canales'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Integración de Canales: Integración de diversos canales de
										comunicación, como web, móvil, redes sociales y centros de
										contacto, asegurando una interacción continua y consistente
										con los clientes.
									</Highlight>
								</ListItem>
							</List>
							<Link as={ReachLink} to='/servicios'>
								<Button
									w='fit-content'
									rightIcon={<ArrowRightIcon style={{ height: '15px' }} />}
								>
									Ver más
								</Button>
							</Link>
						</Stack>
						<Stack
							position='relative'
							w={isMobile ? '100%' : '40%'}
							overflow='hidden'
						>
							<Image
								objectFit='cover'
								alt='Imagen referente a Soluciones de Omnicanalidad'
								h='100%'
								src='/assets/img/servicios-omni.png'
							/>
						</Stack>
					</Stack>
				</SwiperSlide>
				<SwiperSlide>
					<Stack
						borderRadius={8}
						direction={isMobile ? 'column-reverse' : 'row'}
						gap={0}
						height='100%'
						overflow='hidden'
						bgColor='azul-2'
					>
						<Stack
							paddingBlock='2em'
							paddingInline={isMobile ? '1.5em' : '2.5em'}
							h='100%'
							w={isMobile ? '100%' : '60%'}
							gap={5}
						>
							<Heading
								fontSize='3xl'
								as='h3'
								color='amarillo'
								fontWeight='regular'
								letterSpacing={1}
							>
								Cyberseguridad
							</Heading>
							<List spacing={5} flex={1}>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Auditorías de seguridad'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Auditorías de seguridad: Evaluaciones de seguridad para
										identificar vulnerabilidades en infraestructuras de TI, con
										recomendaciones para fortalecer las defensas.
									</Highlight>
								</ListItem>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Soluciones de Seguridad Integral'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Soluciones de Seguridad Integral: Implementación de
										soluciones de seguridad completas, incluyendo firewalls
										avanzados y sistemas de detección y prevención de
										intrusiones.
									</Highlight>
								</ListItem>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Respuesta a Incidentes'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Respuesta a Incidentes: Servicios de respuesta rápida a
										incidentes de seguridad, incluyendo recuperación de datos y
										análisis forense.
									</Highlight>
								</ListItem>
							</List>
							<Link as={ReachLink} to='/servicios'>
								<Button
									w='fit-content'
									rightIcon={<ArrowRightIcon style={{ height: '15px' }} />}
								>
									Ver más
								</Button>
							</Link>
						</Stack>
						<Stack
							position='relative'
							w={isMobile ? '100%' : '40%'}
							overflow='hidden'
						>
							<Image
								objectFit='cover'
								alt='Imagen referente a Cyberseguridad'
								h='100%'
								src='/assets/img/servicios-cyber.png'
							/>
						</Stack>
					</Stack>
				</SwiperSlide>
				<SwiperSlide>
					<Stack
						borderRadius={8}
						direction={isMobile ? 'column-reverse' : 'row'}
						gap={0}
						height='100%'
						overflow='hidden'
						bgColor='azul-2'
					>
						<Stack
							paddingBlock='2em'
							paddingInline={isMobile ? '1.5em' : '2.5em'}
							h='100%'
							w={isMobile ? '100%' : '60%'}
							gap={5}
						>
							<Heading
								fontSize='3xl'
								as='h3'
								color='amarillo'
								fontWeight='regular'
								letterSpacing={1}
							>
								Infraestructura IT
							</Heading>
							<List spacing={5} flex={1}>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Diseño de Infraestructura'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Diseño de Infraestructura: Desarrollo de soluciones robustas
										y escalables de infraestructura IT, incluyendo servidores y
										soluciones de almacenamiento.
									</Highlight>
								</ListItem>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Virtualización y Almacenamiento'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Virtualización y Almacenamiento: Implementación de
										soluciones de virtualización y almacenamiento en la nube.
									</Highlight>
								</ListItem>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Mantenimiento y Gestión de Sistemas'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Mantenimiento y Gestión de Sistemas: Soporte continuo y
										mantenimiento preventivo de infraestructuras IT.
									</Highlight>
								</ListItem>
							</List>
							<Link as={ReachLink} to='/servicios'>
								<Button
									w='fit-content'
									rightIcon={<ArrowRightIcon style={{ height: '15px' }} />}
								>
									Ver más
								</Button>
							</Link>
						</Stack>
						<Stack
							position='relative'
							w={isMobile ? '100%' : '40%'}
							overflow='hidden'
						>
							<Image
								objectFit='cover'
								h='100%'
								alt='Imagen referente a Infraestructura IT'
								src='/assets/img/servicios-mantenimiento.png'
							/>
						</Stack>
					</Stack>
				</SwiperSlide>
				<SwiperSlide>
					<Stack
						borderRadius={8}
						direction={isMobile ? 'column-reverse' : 'row'}
						gap={0}
						height='100%'
						overflow='hidden'
						bgColor='azul-2'
					>
						<Stack
							paddingBlock='2em'
							paddingInline={isMobile ? '1.5em' : '2.5em'}
							h='100%'
							w={isMobile ? '100%' : '60%'}
							gap={5}
						>
							<Heading
								fontSize='3xl'
								as='h3'
								color='amarillo'
								fontWeight='regular'
								letterSpacing={1}
							>
								Modernización de Sistemas
							</Heading>
							<List spacing={5} flex={1}>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Automatización de procesos'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Automatización de procesos: Implementación de soluciones
										para la automatización de procesos empresariales.
									</Highlight>
								</ListItem>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Migración a la Nube'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Migración a la Nube: Asesoramiento y ejecución en
										migraciones a plataformas de cloud computing.
									</Highlight>
								</ListItem>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Actualización de Sistemas'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Actualización de Sistemas: Renovación y actualización de
										sistemas y aplicaciones.
									</Highlight>
								</ListItem>
							</List>
							<Link as={ReachLink} to='/servicios'>
								<Button
									w='fit-content'
									rightIcon={<ArrowRightIcon style={{ height: '15px' }} />}
								>
									Ver más
								</Button>
							</Link>
						</Stack>
						<Stack
							position='relative'
							w={isMobile ? '100%' : '40%'}
							overflow='hidden'
						>
							<Image
								objectFit='cover'
								h='100%'
								alt='Imagen referente a Modernización de Sistemas'
								src='/assets/img/servicios-modernizacion.png'
							/>
						</Stack>
					</Stack>
				</SwiperSlide>
				<SwiperSlide>
					<Stack
						borderRadius={8}
						direction={isMobile ? 'column-reverse' : 'row'}
						gap={0}
						height='100%'
						overflow='hidden'
						bgColor='azul-2'
					>
						<Stack
							paddingBlock='2em'
							paddingInline={isMobile ? '1.5em' : '2.5em'}
							h='100%'
							w={isMobile ? '100%' : '60%'}
							gap={5}
						>
							<Heading
								fontSize='3xl'
								as='h3'
								color='amarillo'
								fontWeight='regular'
								letterSpacing={1}
							>
								Soporte Operativo IT
							</Heading>
							<List spacing={5} flex={1}>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Soporte Técnico Integral'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Soporte Técnico Integral: Asistencia técnica para hardware y
										software, con enfoque en rápida resolución y minimización de
										inactividad.
									</Highlight>
								</ListItem>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Mantenimiento de Sistemas'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Mantenimiento de Sistemas: Mantenimiento preventivo y
										correctivo de sistemas IT.
									</Highlight>
								</ListItem>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Monitorización de Sistemas'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Monitorización de Sistemas: Supervisión constante de
										sistemas IT.
									</Highlight>
								</ListItem>
							</List>
							<Link as={ReachLink} to='/servicios'>
								<Button
									w='fit-content'
									rightIcon={<ArrowRightIcon style={{ height: '15px' }} />}
								>
									Ver más
								</Button>
							</Link>
						</Stack>
						<Stack
							position='relative'
							w={isMobile ? '100%' : '40%'}
							overflow='hidden'
						>
							<Image
								objectFit='cover'
								alt='Imagen referente a Soporte Operativo IT'
								h='100%'
								src='/assets/img/soporte.png'
							/>
						</Stack>
					</Stack>
				</SwiperSlide>
				<SwiperSlide>
					<Stack
						borderRadius={8}
						direction={isMobile ? 'column-reverse' : 'row'}
						gap={0}
						height='100%'
						overflow='hidden'
						bgColor='azul-2'
					>
						<Stack
							paddingBlock='2em'
							paddingInline={isMobile ? '1.5em' : '2.5em'}
							h='100%'
							w={isMobile ? '100%' : '60%'}
							gap={5}
						>
							<Heading
								fontSize='3xl'
								as='h3'
								color='amarillo'
								fontWeight='regular'
								letterSpacing={1}
							>
								Videovigilancia Profesional
							</Heading>
							<List spacing={5} flex={1}>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Implementación de Sistemas de Videovigilancia'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Implementación de Sistemas de Videovigilancia: Diseño e
										instalación de sistemas de videovigilancia personalizados.
									</Highlight>
								</ListItem>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Análisis Inteligente de Video'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Análisis Inteligente de Video: Tecnologías de análisis de
										video avanzadas para seguridad y toma de decisiones.
									</Highlight>
								</ListItem>
								<ListItem maxW='70ch' textAlign={isMobile ? 'left' : 'justify'}>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Gestión y Almacenamiento de Video'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Gestión y Almacenamiento de Video: Soluciones para
										almacenamiento y acceso a grabaciones de video.
									</Highlight>
								</ListItem>
							</List>
							<Link as={ReachLink} to='/servicios'>
								<Button
									w='fit-content'
									rightIcon={<ArrowRightIcon style={{ height: '15px' }} />}
								>
									Ver más
								</Button>
							</Link>
						</Stack>
						<Stack
							position='relative'
							w={isMobile ? '100%' : '40%'}
							overflow='hidden'
						>
							<Image
								objectFit='cover'
								h='100%'
								alt='Imagen referente a Videovigilancia Profesional'
								src='/assets/img/video.png'
							/>
						</Stack>
					</Stack>
				</SwiperSlide>
			</Swiper>
		</Section>
	);
};

export default Servicios;
