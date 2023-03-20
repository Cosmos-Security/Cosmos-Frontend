import {
  Link ,
  Text ,
  Button,
  Flex,
  Stack,
  Box,
  Icon,
  SimpleGrid
} from '@chakra-ui/react';

import { useState } from 'react';

const Feature = (props) => {
  return (
    <Flex align="center">
      <Flex shrink={0}>
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          color="purple.500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </Icon>
      </Flex>
      <Box ml={4}>
        <span
          mt={2}
          color="gray.700"
        >
          {props.children}
        </span>
      </Box>
    </Flex>
  );
};

export default function Pricing() {
  const [frequency, setFrequency] = useState("month");
  return (
    <Flex
      w="full"
      px={8} py={8}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        py="64px"
        px="10"
      >
        <Box w="full" px={[10, , 4]} mx="auto" textAlign="center">
          <Text mb={2} fontSize="5xl" fontWeight="bold" lineHeight="tight">
            Plans & Pricing
          </Text>
          <Text
            mb={6}
            fontSize={["lg", , "xl"]}
            color="gray.600"
          >
            Try for Free Now! No
            credit card required
          </Text>
          <Flex justify="center" mx={["auto", 0]} mb={-2}>
            <Stack
              direction="row"
              justify="space-between"
              p="2"
              textAlign="center"
              rounded="md"
            >
              <Button
                colorScheme="purple"
                variant={frequency === "month" ? "solid" : "ghost"}
                onClick={() => setFrequency("month")}
                px={6}
              >
                Bill Monthly
              </Button>
              <Button
                colorScheme="purple"
                variant={frequency === "year" ? "solid" : "ghost"}
                onClick={() => setFrequency("year")}
                px={6}
              >
                Bill Yearly
              </Button>
            </Stack>
          </Flex>
        </Box>
        <Box maxW="7xl" py="20" mx="auto">
          <SimpleGrid columns={[1, , , 3]} gap={[16, 8]}>
            <Box
              rounded={["none", "lg"]}
              shadow={["none", "md"]}
              bg="white"
            >
              <Flex
                direction="column"
                justify="space-between"
                p="6"
                borderBottomWidth="1px"
                color="gray.200"
              >
                <Text
                  mb={1}
                  fontSize="lg"
                  fontWeight="semibold"
                  color="gray.700"
                >
                  Free
                </Text>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={["bold", "extrabold"]}
                  color="gray.900"
                  lineHeight="tight"
                >
                  ${frequency === "month" ? 0 : 0}
                  <Text
                    as="span"
                    fontSize="2xl"
                    fontWeight="medium"
                    color="gray.600"
                  >
                    {" "}
                    /{frequency}
                  </Text>
                </Text>
                <Link
                  w={["full", , "auto"]}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  _light={{
                    color: "white",
                  }}
                  bg="purple.600"
                  _hover={{
                    bg: "purple.700",
                  }}
                >
                  Get started
                </Link>
              </Flex>
              <Stack direction="column" p="6" spacing="3" flexGrow="1">
                <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                <Feature>Suppression Management</Feature>
                <Feature>Email Tracking and Analytics</Feature>
                <Feature>99.99% Guaranteed Uptime SLA</Feature>
              </Stack>
            </Box>

            <Box
              rounded={["none", "lg"]}
              shadow={["none", "md"]}
              bg="white"
            >
              <Flex
                direction="column"
                justify="space-between"
                p="6"
                borderBottomWidth="1px"
                color="gray.200"
              >
                <Text
                  mb={1}
                  fontSize="lg"
                  fontWeight="semibold"
                  color="gray.700"
                >
                  Premium
                </Text>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={["bold", "extrabold"]}
                  color="gray.900"
                  lineHeight="tight"
                >
                  ${frequency === "month" ? 9 : 89}
                  <Text
                    as="span"
                    fontSize="2xl"
                    fontWeight="medium"
                    color="gray.600"
                  >
                    {" "}
                    /{frequency}
                  </Text>
                </Text>
                <Link
                  w={["full", , "auto"]}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  _light={{
                    color: "gray.800",
                  }}
                  bg="gray.50"
                  _hover={{
                    bg: "gray.100",
                  }}
                >
                  Try for free
                </Link>
              </Flex>
              <Stack direction="column" p="6" spacing="3" flexGrow="1">
                <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                <Feature>Suppression Management</Feature>
                <Feature>Email Tracking and Analytics</Feature>
                <Feature>99.99% Guaranteed Uptime SLA</Feature>
                <Feature>5 Days of Log Retention</Feature>
                <Feature>Limited 24/7 Ticket Support</Feature>
              </Stack>
            </Box>

            <Box
              rounded={["none", "lg"]}
              shadow={["none", "md"]}
              bg="white"
            >
              <Flex
                direction="column"
                justify="space-between"
                p="6"
                borderBottomWidth="1px"
                color="gray.200"
              >
                <Text
                  mb={1}
                  fontSize="lg"
                  fontWeight="semibold"
                  color="gray.700"
                >
                  Expert
                </Text>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={["bold", "extrabold"]}
                  color="gray.900"
                  lineHeight="tight"
                >
                  ${frequency === "month" ? 21 : 189}
                  <Text
                    as="span"
                    fontSize="2xl"
                    fontWeight="medium"
                    color="gray.600"
                  >
                    {" "}
                    /{frequency}
                  </Text>
                </Text>
                <Link
                  w={["full", , "auto"]}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  _light={{
                    color: "gray.800",
                  }}
                  bg="gray.50"
                  _hover={{
                    bg: "gray.100",
                  }}
                >
                  Try for free
                </Link>
              </Flex>
              <Stack direction="column" p="6" spacing="3" flexGrow="1">
                <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                <Feature>Suppression Management</Feature>
                <Feature>Email Tracking and Analytics</Feature>
                <Feature>99.99% Guaranteed Uptime SLA</Feature>
                <Feature>5 Days of Log Retention</Feature>
                <Feature>Limited 24/7 Ticket Support</Feature>
                <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
                <Feature>1,000 Email Address Validations</Feature>
              </Stack>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  );
};
