import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "../components/layouts/main";
import ContextWrapper from "../context/state";

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <ContextWrapper>
          <Component {...pageProps} key={router.route} />
        </ContextWrapper>
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
