import React, { useState, useEffect } from "react";
import { Box, Container, VStack, Heading, Text, IconButton } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Motion wrapper for Chakra UI Box
const MotionBox = motion(Box);

// Service data
const services = [
  { 
    title: "General Dentistry", 
    description: "Comprehensive oral health care including cleanings, fillings, and preventive treatments.", 
    img: "/Images/client/Serv_1.png" 
  },
  { 
    title: "Cosmetic Dentistry", 
    description: "Transform your smile with veneers, whitening, and aesthetic dental procedures.", 
    img: "/Images/client/HomeImage.png" 
  },
  { 
    title: "Orthodontics", 
    description: "Straighten your teeth with traditional braces or modern clear aligner systems.", 
    img: "/Images/client/Serv_2.png" 
  },
  { 
    title: "Implants", 
    description: "Replace missing teeth with long-lasting, natural-looking dental implants.", 
    img: "/Images/client/Serv_4.png" 
  },
  { 
    title: "Pediatric Dentistry", 
    description: "Gentle and friendly dental care for children to build healthy habits early.", 
    img: "/Images/client/Serv_5.png" 
  },
];


// Service Card Component (No Flip)
function ServiceCard({ service }) {
  return (
    <MotionBox
      w="400px"
      h="500px"
      borderRadius="lg"
      overflow="hidden"
      position="relative"
      cursor="pointer"
      whileHover={{ scale: 1.05 }}
      flexShrink={0}
      boxShadow="lg"
      bgImage={`url(${service.img})`}
      bgSize="cover"
      bgPos="center"
    >
      <VStack
        position="absolute"
        bottom="0"
        w="full"
        py={6}
        px={8}
        spacing={2}
        bg="rgba(0,0,0,0.65)"
        color="white"
        textAlign="center"
        transition="background 0.3s ease"
        _hover={{ bg: "rgba(0,0,0,0.85)" }}
      >
        <Heading size="lg">{service.title}</Heading>
        <Text fontSize="md">{service.description}</Text>
      </VStack>
    </MotionBox>
  );
}

// Services Carousel
const Services = () => {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  // Continuous scroll animation
  useEffect(() => {
    if (!hovered) {
      controls.start({
        x: ["0%", "-50%"],
        transition: { duration: 20, ease: "linear", repeat: Infinity },
      });
    } else {
      controls.stop();
    }
  }, [hovered, controls]);

  // Duplicate services array for seamless loop
  const displayServices = [...services, ...services];

  return (
    <Box id="services" py={28} bg="gray.50" position="relative" overflow="hidden">
      <Container maxW="7xl">
        <VStack spacing={12}>
          <Heading as="h2" size="2xl" color="gray.700" textAlign="center">
            Our Services
          </Heading>
          {/* Carousel Row */}
          <Box
            display="flex"
            overflow="hidden"
            w="100%"
            position="relative"
          >
            <MotionBox
              display="flex"
              gap={8}
              animate={controls}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            >
              {displayServices.map((service, i) => (
                <ServiceCard key={i} service={service} />
              ))}
            </MotionBox>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Services;
