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

const Construction = () => {
  return (
    <Layout title="Under Construction">
      <Container>
        <Center mb={6} mt={20}>
          <Image
            src="/images/construction.svg"
            width={"200%"}
            height={"200%"}
            alt="construction pylon"
          />
        </Center>
        <Heading size="xl">Under Construction</Heading>
        <Text>
          The page you&apos;re looking for is currently under construction.
          Please check back soon.
        </Text>
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

export default Construction;
