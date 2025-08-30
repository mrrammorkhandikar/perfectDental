# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



======================================

// src/components/Services.jsx

import React, { useState } from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Motion wrapper
const MotionBox = motion(Box);

// Service data
const services = [
  {
    title: "General Dentistry",
    description:
      "Comprehensive oral health care including cleanings, fillings, and preventive treatments.",
    img: "/src/assets/Images/client/Serv_1.png",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with veneers, whitening, and aesthetic dental procedures.",
    img: "/src/assets/Images/client/Serv_1.png",
  },
  {
    title: "Orthodontics",
    description:
      "Straighten your teeth with traditional braces or modern clear aligner systems.",
    img: "/src/assets/Images/client/Serv_1.png",
  },
  {
    title: "Implants",
    description:
      "Replace missing teeth with long-lasting, natural-looking dental implants.",
    img: "/src/assets/Images/client/Serv_1.png",
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Gentle and friendly dental care for children to build healthy habits early.",
    img: "/src/assets/Images/client/Serv_1.png",
  },
];

// Flip Card Component
function ServiceCard({ service }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <MotionBox
      role="button"
      tabIndex={0}
      position="relative"
      w="400px"
      h="500px"
      borderRadius="lg"
      cursor="pointer"
      perspective="1200px"
      onClick={() => setFlipped(!flipped)}
      whileHover={{ scale: 1.05 }}
    >
      {/* Flip container */}
      <MotionBox
        position="absolute"
        inset="0"
        borderRadius="lg"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.8 }}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: flipped ? 180 : 0 }}
      >
        {/* Front side */}
        <Box
          position="absolute"
          inset="0"
          borderRadius="lg"
          bgImage={`url(${service.img})`}
          bgSize="cover"
          bgPos="center"
          backfaceVisibility="hidden"
          overflow="hidden"
        >
          {/* Gradient overlay only for title */}
          <Box
            position="absolute"
            bottom="0"
            w="full"
            py={4}
            px={6}
            bgGradient="linear(to-t, rgba(0,0,0,0.7), rgba(0,0,0,0))"
          >
            <Heading color="white" size="lg">
              {service.title}
            </Heading>
          </Box>
        </Box>

        {/* Back side */}
        <Box
          position="absolute"
          inset="0"
          borderRadius="lg"
          bgImage={`url(${service.img})`}
          bgSize="cover"
          bgPos="center"
          backfaceVisibility="hidden"
          transform="rotateY(180deg)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={6}
          textAlign="center"
          _before={{
            content: '""',
            position: "absolute",
            inset: 0,
            bg: "rgba(0,0,0,0.65)", // only appears when flipped
            borderRadius: "lg",
          }}
        >
          <VStack spacing={4} color="white" zIndex={1}>
            <Heading size="lg">{service.title}</Heading>
            <Text fontSize="md">{service.description}</Text>
          </VStack>
        </Box>
      </MotionBox>
    </MotionBox>
  );
}

// Main Services Section
const Services = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? services.length - visibleCards : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) =>
      prev >= services.length - visibleCards ? 0 : prev + 1
    );
  };

  return (
    <Box id="services" py={28} bg="gray.50" position="relative" overflow="hidden">
      <Container maxW="7xl">
        <VStack spacing={12}>
          <Heading as="h2" size="2xl" color="gray.700" textAlign="center">
            Our Services
          </Heading>

          {/* Cards Row */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={8}
            overflow="hidden"
          >
            {services
              .slice(index, index + visibleCards)
              .map((service, i) => (
                <ServiceCard key={i} service={service} />
              ))}
          </Box>

          {/* Nav buttons */}
          <IconButton
            aria-label="Previous"
            icon={<FaChevronLeft />}
            onClick={handlePrev}
            position="absolute"
            left={2}
            top="50%"
            transform="translateY(-50%)"
            bg="whiteAlpha.700"
            _hover={{ bg: "whiteAlpha.900" }}
            boxShadow="md"
          />
          <IconButton
            aria-label="Next"
            icon={<FaChevronRight />}
            onClick={handleNext}
            position="absolute"
            right={2}
            top="50%"
            transform="translateY(-50%)"
            bg="whiteAlpha.700"
            _hover={{ bg: "whiteAlpha.900" }}
            boxShadow="md"
          />
        </VStack>
      </Container>
    </Box>
  );
};

export default Services;
