import NextLink from "next/link";
import { Box, Heading, Image, Link } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Title = ({ children }) => {
  return (
    <Box display="inline-flex">
      <Box>
        <NextLink href="/blog" passHref>
          <Link>Blog</Link>
        </NextLink>
        <span>
          {" "}
          <ChevronRightIcon />{" "}
        </span>
      </Box>
      <Box>
        <Heading display="inline-block" fontSize="20" mb={4}>
          {children}
        </Heading>
      </Box>
    </Box>
  );
};

export const BlogImage = ({ src, alt }) => {
  return <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />;
};
