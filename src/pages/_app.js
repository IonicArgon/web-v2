import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "../components/layouts/main";
import theme from "../lib/theme";
import { AnimatePresence } from "framer-motion";
import "@fontsource/varela-round/400.css";
import { Analytics } from '@vercel/analytics/react'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
          <Analytics />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
