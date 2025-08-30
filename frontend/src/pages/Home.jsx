import React from 'react';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import AppointmentForm from '../components/AppointmentForm';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

// Floating animation using CSS-in-JS
const floatAnimation = {
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' }
  },
  animation: 'float 4s ease-in-out infinite'
};

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg="gray.50" position="relative">
      {/* Floating Navbar */}
      <NavBar />
      
      <Box as="main">
        {/* Hero Section */}
        <Box
          minH="100vh"
          bgImage="url('/Images/client/image.jpg')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          px={8}
          py={20}
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'rgba(0, 10, 89, 0.7)',
            zIndex: 1
          }}
        >
          <Container maxW="6xl" px={8} position="relative" zIndex={2}>
            <Flex 
               direction={{ base: "column", lg: "row" }} 
               align="center" 
               justify="center" 
               gap={12} 
               minH="70vh" 
               textAlign={{ base: "center", lg: "left" }} 
             >
              {/* Information Section */} 
               <Box flex={1}> 
                 <VStack spacing={6} align={{ base: "center", lg: "flex-start" }}>
                  <Heading 
                    as="h1" 
                    size="4xl" 
                    fontWeight="bold"
                    lineHeight="shorter"
                    color="white"
                    textShadow="2px 2px 4px rgba(0,0,0,0.3)"
                    maxW="4xl"
                  >
                    Perfect32 Dental Care
                  </Heading>
                  <Text 
                    fontSize="xl" 
                    lineHeight="relaxed" 
                    color="white"
                    textShadow="1px 1px 2px rgba(0,0,0,0.3)"
                    maxW="2xl"
                  >
                    Experience exceptional dental care with our state-of-the-art facility and expert team. Your perfect smile starts here.
                  </Text>
                  <Button
                    size="lg"
                    bg="white"
                    color="#000a59"
                    variant="solid"
                    fontWeight="semibold"
                    px={8}
                    py={3}
                    borderRadius="full"
                    shadow="lg"
                    _hover={{
                      bg: 'gray.100',
                      transform: 'translateY(-2px)',
                      shadow: 'xl',
                      transition: 'all 0.3s ease'
                    }}
                    transition="all 0.3s ease"
                    onClick={onOpen}
                  >
                    Book Your Appointment
                  </Button>
                </VStack>
              </Box>

              {/* Floating Overlay Image */} 
               <Box 
                 position="relative" 
                 sx={floatAnimation} 
                 zIndex={3} 
                 flex={1} 
                 display="flex" 
                 justifyContent="center" 
               >
                <Image
                  src="/Images/client/HomeImage.png"
                  alt="Dental Care Overlay"
                  borderRadius="2xl"
                  shadow="2xl"
                  maxW={{ base: '250px', md: '350px', lg: '450px' }}
                  w="100%"
                  h="auto"
                  objectFit="cover"
                  opacity={0.9}
                />
              </Box>
            </Flex>
          </Container>
        </Box>
        
    
          
          {/* About Section */}
          <About />

           

            
          
          {/* Services Section */}
          <Services />
          
          {/* Contact Section */}
          <Contact />
        </Box>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent mx={{ base: 4, md: 0 }}>
          <ModalCloseButton />
          <ModalBody p={0}>
            <AppointmentForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
      </Box>
    );
  };
 
  export default Home;
