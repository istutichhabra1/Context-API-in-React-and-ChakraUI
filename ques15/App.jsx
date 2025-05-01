import React, { useContext } from 'react';
import { ChakraProvider, Box, Flex, Grid, Button, Text, useBreakpointValue } from '@chakra-ui/react';
import { AuthContext } from './AuthContext';
import { ThemeContext } from './ThemeContext';
import { AuthContextProvider } from './AuthContext';
import { ThemeContextProvider } from './ThemeContext';

const Sidebar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      w={{ base: '100%', md: '250px' }}
      bg={theme === 'light' ? 'gray.100' : 'gray.700'}
      p="4"
      display={{ base: 'none', md: 'block' }}
    >
      {isLoggedIn && <Text fontSize="xl">Welcome, User!</Text>}
      <Text fontSize="lg" mt="4">Sidebar</Text>
    </Box>
  );
};

const Navbar = () => {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Flex
      as="nav"
      p="4"
      bg={theme === 'light' ? 'gray.100' : 'gray.700'}
      justifyContent="space-between"
      align="center"
    >
      <Text fontSize="xl">Dashboard</Text>
      <Flex>
        <Button onClick={toggleAuth} mr="4">
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
        <Button onClick={toggleTheme}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </Flex>
    </Flex>
  );
};

const MainContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
      gap="4"
      p="4"
      bg={theme === 'light' ? 'gray.50' : 'gray.800'}
    >
      {['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6'].map((product, idx) => (
        <Box
          key={idx}
          p="4"
          shadow="md"
          bg={theme === 'light' ? 'gray.200' : 'gray.600'}
          color={theme === 'light' ? 'black' : 'white'}
        >
          <Text>{product}</Text>
        </Box>
      ))}
    </Grid>
  );
};

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      as="footer"
      p="4"
      bg={theme === 'light' ? 'gray.100' : 'gray.700'}
      color={theme === 'light' ? 'black' : 'white'}
      position="fixed"
      bottom="0"
      w="100%"
      textAlign="center"
    >
      Footer Content
    </Box>
  );
};

const App = () => {
  const breakpoint = useBreakpointValue({ base: 'base', md: 'md' });

  return (
    <ChakraProvider>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Flex direction="column" minHeight="100vh">
            <Navbar />
            <Flex direction="row" flex="1">
              <Sidebar />
              <Box
                flex="1"
                p="4"
                bg={theme === 'light' ? 'gray.50' : 'gray.800'}
              >
                <MainContent />
              </Box>
            </Flex>
            <Footer />
          </Flex>
        </ThemeContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
};

export default App;
