import { Box, Container, VStack, Heading, Text, Flex, Image } from "@chakra-ui/react";

const About = () => {
  return (
    <Box id="about" py={16} bg="gray.100">
      <Container maxW="6xl" px={8}>
        <Flex 
          direction={{ base: "column", lg: "row" }} 
          align="center" 
          gap={12}
          minH="60vh"
        >
          {/* Image Section - Left Side */}
          <Box flex={1} display="flex" justifyContent="center">
            <Image
              src="/src/assets/Images/client/AboutUs.png"
              alt="About Perfect32 Dental Care"
              borderRadius="2xl"
              shadow="2xl"
              maxW={{ base: '300px', md: '400px', lg: '500px' }}
              w="100%"
              h="auto"
              objectFit="cover"
            />
          </Box>
          
          {/* Content Section - Right Side */}
          <Box flex={1}>
            <VStack spacing={8} align={{ base: "center", lg: "flex-start" }} textAlign={{ base: "center", lg: "left" }}>
              <Heading as="h2" size="2xl" color="gray.700">
                About Us
              </Heading>
              <Text fontSize="lg" color="gray.600" lineHeight="relaxed">
                At Perfect32, we believe that a healthy smile is a beautiful smile. I'm Dr. [Your Last Name], and as a passionate dental practitioner, my mission is to make quality dental care accessible and comfortable for everyone. We've created a welcoming space where patients of all ages feel at ease, from the first visit to every check-up.
              </Text>
              <Text fontSize="lg" color="gray.600" lineHeight="relaxed">
                Whether you're visiting us for a routine cleaning or a more complex procedure, our focus is always on you. We're dedicated to providing personalized care and creating a treatment plan that fits your unique needs. We're not just treating teeth; we're building lasting relationships with our patients and our community.
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;