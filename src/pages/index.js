import { Box, Container, Heading } from "@chakra-ui/react";
import GreetingWrapper from "../hooks/greeting";

const Page = () => {
  return (
    <Container minW="container.md">
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <GreetingWrapper>
            <Heading size="3xl">Marco Tan.</Heading>
          </GreetingWrapper>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
