import Head from "next/head";
import NavBar from "../navbar";
import Footer from "../footer";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <>
      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="description" content="Hello, I'm Marco Tan!" />
          <meta name="author" content="Marco Tan" />

          <meta name="theme-color" content="#458588" />
          <link rel="icon" href="/favicon.ico" />

          <title>Marco Tan - Homepage</title>
        </Head>

        <NavBar path={router.asPath} />

        <noscript>
          <h1
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            Please enable JavaScript to view this website.
          </h1>
        </noscript>

        <Container maxW="container.lg" pt={20}>
          {children}

          <Footer />
        </Container>
      </Box>
    </>
  );
};

export default Main;
