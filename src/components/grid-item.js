import NextLink from "next/link";
import Image from "next/image";
import { Badge, Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const BlogGridItem = ({ id, title, date, thumbnail }) => {
  const idChecked = (id === "construction") ? "construction" : "/blog/" + id;

  return (
    <Box w="100%" align="center">
      <NextLink href={idChecked}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <LinkOverlay href={idChecked}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Badge>{date}</Badge>
        </LinkBox>
      </NextLink>
    </Box>
  );
};

export const ProjectGridItem = ({ children, id, title, thumbnail }) => {
  const idChecked = (id === "construction") ? "construction" : "/projects/" + id;

  return (
    <Box w="100%" align="center">
      <NextLink href={idChecked}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <LinkOverlay href={idChecked}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  );
};

export const GridItemStyle = () => {
  return (
    <Global
      styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
        }
      `}
    />
  );
};
