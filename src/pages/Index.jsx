import React from "react";
import { Box, Flex, Text, Button, VStack, HStack, Spacer, Heading, IconButton, useColorMode, useColorModeValue, Menu, MenuButton, MenuList, MenuItem, Avatar, Progress, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";
import { FaSun, FaMoon, FaUserCircle, FaSignOutAlt, FaChartBar, FaClipboardList } from "react-icons/fa";

const DashboardStat = ({ label, value, helpText, isIncreased }) => {
  return (
    <Stat p={4} shadow="md" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{value}</StatNumber>
      <StatHelpText>
        <StatArrow type={isIncreased ? "increase" : "decrease"} />
        {helpText}
      </StatHelpText>
    </Stat>
  );
};

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.800")} minH="100vh" p={8}>
      <Flex mb={8} justifyContent="space-between" alignItems="center">
        <Heading>Dashboard</Heading>
        <HStack>
          <IconButton size="md" fontSize="lg" aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`} variant="ghost" color="current" ml={{ base: "0", md: "3" }} onClick={toggleColorMode} icon={colorMode === "light" ? <FaMoon /> : <FaSun />} />
          <Menu>
            <MenuButton as={Button} rightIcon={<FaUserCircle />}>
              Profile
            </MenuButton>
            <MenuList>
              <MenuItem icon={<FaChartBar />}>Analytics</MenuItem>
              <MenuItem icon={<FaClipboardList />}>Projects</MenuItem>
              <MenuItem icon={<FaSignOutAlt />}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>

      <VStack spacing={4} align="stretch">
        <HStack spacing={4}>
          <DashboardStat label="Total Views" value="71,897" helpText="Since last week" isIncreased={true} />
          <DashboardStat label="Sales" value="$15,385" helpText="Since last month" isIncreased={false} />
          <DashboardStat label="New Users" value="124" helpText="Since yesterday" isIncreased={true} />
        </HStack>

        <Box p={4} shadow="md" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
          <Heading size="md" mb={4}>
            Progress Overview
          </Heading>
          <Text mb={2}>Workload</Text>
          <Progress value={70} size="sm" colorScheme="green" mb={4} />
          <Text mb={2}>Revenue</Text>
          <Progress value={45} size="sm" colorScheme="blue" />
        </Box>

        <Flex direction={{ base: "column", md: "row" }} spacing={4} align="stretch">
          <Box w={{ base: "100%", md: "70%" }} p={4} shadow="md" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
            <Heading size="md" mb={4}>
              Recent Activities
            </Heading>
            {/* Activity list can be populated here */}
          </Box>
          <Spacer />
          <VStack w={{ base: "100%", md: "30%" }} spacing={4}>
            <Avatar size="xl" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF2YXRhcnxlbnwwfHx8fDE3MDk4MTgyODd8MA&ixlib=rb-4.0.3&q=80&w=1080" />
            <Text fontWeight="bold">Alex Smith</Text>
            <Text color="gray.500">Product Manager</Text>
          </VStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Index;
