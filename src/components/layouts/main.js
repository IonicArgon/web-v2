import Head from "next/head";
import NavBar from "../navbar";
import Footer from "../footer";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Hello, I'm Marco Tan!" />
        <meta name="author" content="Marco Tan" />

        <meta property="og:title" content="Marco Tan - Homepage" />
        <meta property="og:site_name" content="Marco Tan's Homepage" />
        <meta property="og:url" content="https://ionicargon.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/profile.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ionicargon.vercel.app/" />
        <meta property="twitter:title" content="Marco Tan - Homepage" />
        <meta property="twitter:description" content="Hello, I'm Marco Tan!" />
        <meta property="twitter:image" content="/images/profile.jpg" />

        <meta property="theme-color" content="#458588" />

        <title>Marco Tan - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.lg" pt={20}>
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
