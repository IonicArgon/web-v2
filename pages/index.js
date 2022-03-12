import { Box, Container, Heading } from "@chakra-ui/react";
import { useAppContext } from "../context/state";

const Page = () => {
  let sharedState = useAppContext();

  return (
    <Container minW="container.md">
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading size="lg">{sharedState.greeting}</Heading>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
