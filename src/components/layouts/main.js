import Head from "next/head";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={0}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Marco Tan - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.lg" pt={20}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
