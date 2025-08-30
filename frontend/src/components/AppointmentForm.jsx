import React, { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

const services = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Orthodontics",
  "Implants",
  "Pediatric Dentistry",
];

const AppointmentForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const apiEndpoint = "http://localhost:3001/api/send-email"; 

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Your appointment request has been sent successfully! We will contact you soon.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
        });
        if (onClose) onClose();
      } else {
        const errorResult = await response.json();
        alert(errorResult.message || "Failed to submit request. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please check your network connection.");
    }
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={8}
      bg="white"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading as="h3" size="lg" mb={6} color="gray.700" textAlign="center">
        Book an Appointment
      </Heading>
      <VStack spacing={6}>
        <FormControl isRequired>
          <FormLabel>Your Name</FormLabel>
          <Input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email (optional)"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Service Needed</FormLabel>
          <Select
            name="service"
            placeholder="Select a service"
            value={formData.service}
            onChange={handleInputChange}
          >
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
            <option value="Other">Other</option>
          </Select>
        </FormControl>
        <Button
          size="lg"
          colorScheme="blue"
          variant="solid"
          fontWeight="semibold"
          w="full"
          type="submit"
        >
          Schedule Appointment
        </Button>
      </VStack>
    </Box>
  );
};

export default AppointmentForm;