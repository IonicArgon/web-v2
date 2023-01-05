import NextLink from "next/link";
import { Badge, Box, Heading, Image, Link } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Title = ({ children }) => {
  return (
    <Box>
      <NextLink href="/projects" passHref>
        <Link>Projects</Link>
      </NextLink>
      <span>
        {" "}
        <ChevronRightIcon />{" "}
      </span>
      <Heading display="inline-block" fontSize="20" mb={4}>
        {children}
      </Heading>
    </Box>
  );
};

export const ProjectImage = ({ src, alt }) => {
  return <Image borderRadius="0.5rem" w="full" src={src} alt={alt} mb={4} />;
};

export const ProjectMeta = ({ children }) => {
  return (
    <Badge color="#b8bb26" mr={2}>
      {children}
    </Badge>
  );
};
