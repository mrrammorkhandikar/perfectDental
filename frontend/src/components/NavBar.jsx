import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  VStack,
  Link,
  Text,
  IconButton,
  Collapse,
  useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <Box
      position="fixed"
      top={4}
      left="50%"
      transform={`translateX(-50%) translateY(${isVisible ? '0' : '-120%'})`}
      zIndex={1000}
      w={{ base: '95%', md: 'auto' }}
      minW={{ md: '600px' }}
      maxW="800px"
      transition="transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
      opacity={isVisible ? 1 : 0}
      pointerEvents={isVisible ? 'auto' : 'none'}
    >
      <Box
        bg="#000a59"
        borderRadius={{ base: "none", md: "full" }}
        px={{ base: 4, md: 8 }}
        py={3}
        shadow="xl"
        backdropFilter="blur(10px)"
      >
        <Flex align="center" justify="space-between">
          <Text fontSize="xl" fontWeight="bold" color="white">
            Perfect32
          </Text>
          
          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                color="white"
                fontSize="sm"
                fontWeight="medium"
                _hover={{ 
                  color: 'blue.200',
                  transform: 'translateY(-1px)',
                  transition: 'all 0.2s ease'
                }}
                transition="all 0.2s ease"
              >
                {link.name}
              </Link>
            ))}
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            aria-label="Toggle navigation"
            icon={isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon boxSize={4} />}
            variant="ghost"
            color="white"
            size="sm"
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            _hover={{ bg: 'whiteAlpha.200' }}
            _active={{ bg: 'whiteAlpha.300' }}
            transition="all 0.2s ease"
          />
        </Flex>
        
        {/* Mobile Navigation */}
        <Collapse in={isOpen} animateOpacity>
          <VStack
            spacing={3}
            align="stretch"
            mt={4}
            pt={4}
            borderTop="1px"
            borderColor="whiteAlpha.300"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                color="white"
                fontSize="sm"
                fontWeight="medium"
                py={2}
                px={2}
                borderRadius="md"
                _hover={{ 
                  bg: 'whiteAlpha.200',
                  color: 'blue.200',
                  transform: 'translateX(4px)',
                  transition: 'all 0.2s ease'
                }}
                transition="all 0.2s ease"
                onClick={onToggle}
              >
                {link.name}
              </Link>
            ))}
          </VStack>
        </Collapse>
      </Box>
    </Box>
  );
};

export default NavBar;