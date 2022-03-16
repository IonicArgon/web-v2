import NextLink from "next/link";
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
import Layout from "../components/layouts/article";

const NotFound = () => {
  return (
    <Layout title="Whoops!">
      <Container>
        <Center mb={6} mt={20}>
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
          <NextLink href="/" passHref>
            <Button bgColor="#8ec07c" color="#282828">
              Return to home
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  );
};

export default NotFound;
