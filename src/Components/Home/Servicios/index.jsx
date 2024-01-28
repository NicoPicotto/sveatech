import Section from '../../Section/Section';
import {
	Grid,
	GridItem,
	Heading,
	List,
	ListItem,
	Button,
	Stack,
	ListIcon,
	Highlight,
	Image,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.css';

// import required modules
import { Mousewheel, Navigation, Autoplay } from 'swiper/modules';

import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const Servicios = () => {
	return (
		<Section paddingBlock='7em'>
			<Heading mb='1em' textAlign='center'>
				<Highlight
					query={['excelencia', 'a medida']}
					styles={{
						color: 'natural',
						textDecor: 'underline',
						textUnderlineOffset: 5,
						textDecorationThickness: 2,
						textDecorationColor: 'amarillo',
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
					delay: 2500,
				}}
				spaceBetween={5}
				mousewheel={true}
				navigation={true}
				grabCursor={true}
				modules={[Mousewheel, Navigation, Autoplay]}
				className='mySwiper'
			>
				<SwiperSlide>
					<Stack
						borderRadius={8}
						direction='row'
						gap={0}
						overflow='hidden'
						bgColor='azul-2'
					>
						<Stack
							paddingBlock='1.5em'
							paddingInline='2em'
							h='100%'
							w='60%'
							gap={5}
						>
							<Heading fontSize='4xl' as='h3' color='amarillo'>
								Networking y Conectividad
							</Heading>
							<List spacing={5} flex={1}>
								<ListItem maxW='70ch' textAlign='justify'>
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
								<ListItem maxW='70ch' textAlign='justify'>
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
								<ListItem maxW='70ch' textAlign='justify'>
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
							<Button
								w='fit-content'
								rightIcon={<ArrowRightIcon style={{ height: '15px' }} />}
							>
								Me interesa
							</Button>
						</Stack>
						<Stack position='relative' w='40%' overflow='hidden'>
							<Image
								objectFit='cover'
								h='100%'
								src='/assets/img/conectivity.png'
							/>
						</Stack>
					</Stack>
				</SwiperSlide>
				<SwiperSlide>
					<Stack
						borderRadius={8}
						direction='row'
						gap={0}
						overflow='hidden'
						bgColor='azul-2'
					>
						<Stack
							paddingBlock='1.5em'
							paddingInline='2em'
							h='100%'
							w='60%'
							gap={5}
						>
							<Heading fontSize='4xl' as='h3' color='amarillo'>
								Telefonía IP y Comunicaciones Unificadas
							</Heading>
							<List spacing={5} flex={1}>
								<ListItem maxW='70ch' textAlign='justify'>
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
								<ListItem maxW='70ch' textAlign='justify'>
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
							<Button
								w='fit-content'
								rightIcon={<ArrowRightIcon style={{ height: '15px' }} />}
							>
								Me interesa
							</Button>
						</Stack>
						<Stack position='relative' w='40%' overflow='hidden'>
							<Image
								objectFit='cover'
								h='100%'
								src='/assets/img/conectivity.png'
							/>
						</Stack>
					</Stack>
				</SwiperSlide>
				<SwiperSlide>
					<Stack
						borderRadius={8}
						direction='row'
						gap={0}
						overflow='hidden'
						bgColor='azul-2'
					>
						<Stack
							paddingBlock='1.5em'
							paddingInline='2em'
							h='100%'
							w='60%'
							gap={5}
						>
							<Heading fontSize='4xl' as='h3' color='amarillo'>
								Soluciones de Omnicanalidad
							</Heading>
							<List spacing={5} flex={1}>
								<ListItem maxW='70ch' textAlign='justify'>
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
								<ListItem maxW='70ch' textAlign='justify'>
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
							<Button
								w='fit-content'
								rightIcon={<ArrowRightIcon style={{ height: '15px' }} />}
							>
								Me interesa
							</Button>
						</Stack>
						<Stack position='relative' w='40%' overflow='hidden'>
							<Image
								objectFit='cover'
								h='100%'
								src='/assets/img/conectivity.png'
							/>
						</Stack>
					</Stack>
				</SwiperSlide>
				<SwiperSlide>
					<Stack
						borderRadius={8}
						direction='row'
						gap={0}
						overflow='hidden'
						bgColor='azul-2'
					>
						<Stack
							paddingBlock='1.5em'
							paddingInline='2em'
							h='100%'
							w='60%'
							gap={5}
						>
							<Heading fontSize='4xl' as='h3' color='amarillo'>
								Cyberseguridad
							</Heading>
							<List spacing={5} flex={1}>
								<ListItem maxW='70ch' textAlign='justify'>
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
								<ListItem maxW='70ch' textAlign='justify'>
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
								<ListItem maxW='70ch' textAlign='justify'>
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
							<Button
								w='fit-content'
								rightIcon={<ArrowRightIcon style={{ height: '15px' }} />}
							>
								Me interesa
							</Button>
						</Stack>
						<Stack position='relative' w='40%' overflow='hidden'>
							<Image
								objectFit='cover'
								h='100%'
								src='/assets/img/conectivity.png'
							/>
						</Stack>
					</Stack>
				</SwiperSlide>
				<SwiperSlide>
					<Stack
						borderRadius={8}
						direction='row'
						gap={0}
						overflow='hidden'
						bgColor='azul-2'
					>
						<Stack
							paddingBlock='1.5em'
							paddingInline='2em'
							h='100%'
							w='60%'
							gap={5}
						>
							<Heading fontSize='4xl' as='h3' color='amarillo'>
								Infraestructura IT
							</Heading>
							<List spacing={5} flex={1}>
								<ListItem maxW='70ch' textAlign='justify'>
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
								<ListItem maxW='70ch' textAlign='justify'>
									<ListIcon as={CheckCircleIcon} color='amarillo' />
									<Highlight
										query='Virtualización y Almacenamiento'
										styles={{ fontWeight: 'bold', color: 'natural' }}
									>
										Virtualización y Almacenamiento: Implementación de
										soluciones de virtualización y almacenamiento en la nube.
									</Highlight>
								</ListItem>
								<ListItem maxW='70ch' textAlign='justify'>
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
							<Button
								w='fit-content'
								rightIcon={<ArrowRightIcon style={{ height: '15px' }} />}
							>
								Me interesa
							</Button>
						</Stack>
						<Stack position='relative' w='40%' overflow='hidden'>
							<Image
								objectFit='cover'
								h='100%'
								src='/assets/img/conectivity.png'
							/>
						</Stack>
					</Stack>
				</SwiperSlide>
			</Swiper>
		</Section>
	);
};

export default Servicios;
