import React from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import AppointmentForm from "./AppointmentForm";

const Contact = () => {
  const mapAddress = "Pink City Commercial Complex, Shop No 103, SH1 building Nr Euro School, Kaspate Wasti Rd., Vishnu Dev Nagar, Wakad, Pune, Maharashtra 411057";
  const mapCoordinates = "18.602135,73.770338"; // Your provided coordinates

  return (
    <Box id="contact" py={20} bg="gray.100">
      <Container maxW="6xl" px={8}>
        <VStack spacing={12} textAlign="center">
          <Heading as="h2" size="2xl" color="gray.700">
            Contact Us
          </Heading>
          <Text fontSize="lg" color="gray.600" lineHeight="relaxed" maxW="2xl">
            Ready to schedule your appointment? Contact us today and take the
            first step towards your perfect smile.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} w="full">
            {/* Left Column: Contact Details & Map */}
            <VStack
              spacing={8}
              p={8}
              bg="white"
              borderRadius="lg"
              boxShadow="lg"
              alignItems="flex-start"
              textAlign="left"
            >
              <Heading as="h3" size="lg" color="gray.700">
                Our Location & Details
              </Heading>
              <VStack spacing={4} alignItems="flex-start">
                <Text fontSize="md" color="gray.600">
                  We look forward to hearing from you and helping you with your
                  dental needs. Feel free to call, email, or visit our clinic.
                </Text>
                <Text fontSize="lg" fontWeight="semibold" color="gray.700">
                  📞 +91 9545464547
                </Text>
                <Text fontSize="lg" fontWeight="semibold" color="gray.700">
                  📧 perfect32@gmail.com
                </Text>
                <Text fontSize="lg" fontWeight="semibold" color="gray.700">
                  📍 {mapAddress}
                </Text>
              </VStack>
              {/* Google Map Embed */}
              <Box w="full" h="400px" borderRadius="md" overflow="hidden">
                <iframe
                  src={`https://maps.google.com/maps?q=${mapCoordinates}&hl=en&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                ></iframe>
              </Box>
            </VStack>

            {/* Right Column: Appointment Form */}
            <AppointmentForm />
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;