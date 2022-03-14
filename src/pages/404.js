import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container>
      <Center>
        <Image
          src="/images/desk-engineer.gif"
          width={"200%"}
          height={"200%"}
          alt="tiny desk engineer"
        />
      </Center>
      <Heading size="2xl">404</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Link href="/" passHref>
          <Button colorScheme="teal">Return to home</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
