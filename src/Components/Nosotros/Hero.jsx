import Section from "../Section/Section";
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
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useMobile } from "../../Context/MobileContext";

const Hero = () => {
  const isMobile = useMobile();
  return (
    <Section paddingBlock='5em'>
      <Stack
        bgColor='azul-2'
        borderRadius={8}
        direction={isMobile ? "column" : "row"}
        align='flex-start'
        justify='space-between'
        position='relative'
      >
        <Stack
          w='100%'
          paddingInline={isMobile ? "1em" : "3em"}
          paddingBlock='2.5em'
          gap={10}
        >
          <Stack
            direction={isMobile ? "column" : "row"}
            w='100%'
            justify='space-between'
            spacing={20}
          >
            <Stack maxW={isMobile ? "100%" : "50%"} gap={5}>
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
                  tecnología y la innovación, comprometidos con llevar a
                  nuestros clientes al próximo nivel. Con una vasta experiencia
                  en el rubro IT, destacamos por entender a fondo las
                  necesidades y desafíos tecnológicos actuales, brindando
                  soluciones que no solo resuelven problemas complejos sino que
                  también promueven el crecimiento y la eficiencia.
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
                  Misión
                </Heading>
                <Text fontSize='lg' textAlign='justify'>
                  Brindar soluciones que resulvan problemas complejos y que
                  promuevan el crecimiento y la eficiencia para empresas.
                  Entendiendo a fondo los desafios y necesidades tecnologicas
                  actuales.
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
                  Visión
                </Heading>
                <Text fontSize='lg' textAlign='justify'>
                  Convertirnos en referentes dentro de la consultoria IT,
                  redefinir los estandares de la industria impulsando soluciones
                  efectivas y sustentables.
                </Text>
              </Stack>
            </Stack>
            <Stack w='50%' display={isMobile && "none"} align='end'>
              <Image
                alt='Retrato de CEO Luis Cerutti'
                src='/assets/img/luigi.png'
                minW='400px'
                w='500px'
                borderRadius='full'
                outline='4px solid #FFD700'
              />
            </Stack>
          </Stack>
          <Divider border='1px solid #FFD700' marginTop={5} />
          <SimpleGrid columns={isMobile ? "1" : "2"} spacing={20}>
            <Stack>
              <Heading
                maxW='20ch'
                as='h2'
                size='lg'
                fontWeight='regular'
                color='amarillo'
                letterSpacing={1}
              >
                Valores
              </Heading>
              <List spacing={4}>
                <ListItem flexDirection='row' textAlign='justify'>
                  <ListIcon as={CheckCircleIcon} color='amarillo' />
                  Innovación: Buscamos constantemente formas creativas de
                  superar los desafíos tecnológicos.
                </ListItem>
                <ListItem flexDirection='row' textAlign='justify'>
                  <ListIcon as={CheckCircleIcon} color='amarillo' />
                  Excelencia: Estamos comprometidos a entregar la mejor calidad
                  en todo lo que hacemos.
                </ListItem>
                <ListItem flexDirection='row' textAlign='justify'>
                  <ListIcon as={CheckCircleIcon} color='amarillo' />
                  Integridad: Actuamos con honestidad y transparencia,
                  construyendo relaciones de confianza.
                </ListItem>
                <ListItem flexDirection='row' textAlign='justify'>
                  <ListIcon as={CheckCircleIcon} color='amarillo' />
                  Compromiso con el Cliente: Las necesidades de nuestros
                  clientes son nuestra prioridad. Nos enfocamos en ofrecer
                  soluciones a medida y eficaces.
                </ListItem>
                <ListItem flexDirection='row' textAlign='justify'>
                  <ListIcon as={CheckCircleIcon} color='amarillo' />
                  Colaboración: Creemos en el poder del trabajo en equipo para
                  generar ideas innovadoras y alcanzar resultados
                  sobresalientes.
                </ListItem>
              </List>
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
                Objetivos
              </Heading>
              <List spacing={4}>
                <ListItem flexDirection='row' textAlign='justify'>
                  <ListIcon as={CheckCircleIcon} color='amarillo' />
                  Ofrecer soluciones que agreguen valor tangible a nuestros
                  clientes.
                </ListItem>
                <ListItem flexDirection='row' textAlign='justify'>
                  <ListIcon as={CheckCircleIcon} color='amarillo' />
                  Superar las expectativas de nuestros clientes en cada
                  proyecto.
                </ListItem>
                <ListItem flexDirection='row' textAlign='justify'>
                  <ListIcon as={CheckCircleIcon} color='amarillo' />
                  Mantenernos a la vanguardia de la industria TI, adoptando las
                  ultimas tendencias y practicas para ofrecer servicios con la
                  mas alta calidad.
                </ListItem>
                <ListItem flexDirection='row' textAlign='justify'>
                  <ListIcon as={CheckCircleIcon} color='amarillo' />
                  Crear relaciones duraderas y de confianza con nuestros
                  clientes, basados en la transparencia y la integridad.
                </ListItem>
              </List>
            </Stack>
          </SimpleGrid>

          <Link as={ReachLink} to='/contacto'>
            <Button w={isMobile ? "100%" : "fit-content"}>
              Quiero Contactarme
            </Button>
          </Link>
        </Stack>
        {/* <Stack
          paddingInline='3em'
          display={isMobile ? "none" : "block"}
          position='sticky'
          paddingBlock='2em'
          top='1em'
        >
          <Image
            alt='Retrato de CEO Luis Cerutti'
            src='/assets/img/luigi.png'
            minW='400px'
            w='500px'
			borderRadius="full"
			outline="4px solid #FFD700"
          />
        </Stack> */}
      </Stack>
    </Section>
  );
};

export default Hero;
