import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectMeta } from "../../components/project";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";


const Project = () => {
  return (
    <Layout title="Portfolio Website">
      <Container>
        <Title>
          Portfolio Website <Badge>2022</Badge>
        </Title>
        <Paragraph>
          A personal website for my portfolio and blog. Built to get 
          an introduction into web development. Used Next.js and ChakraUI
          because it was easy to learn and intuitive to use. Hoping to
          expand on this website further in the future.
        </Paragraph>

        <List ml={4} my={4}>
          <ListItem>
            <ProjectMeta>Repo</ProjectMeta>
            <Link href="https://github.com/IonicArgon/web-v2" isExternal>
              web-v2 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
              Next.js, ChakraUI, framer-motion, emotion
          </ListItem>
          <ListItem>
            <ProjectMeta>Blogpost</ProjectMeta>
            <NextLink href="/construction" passHref>
              <Link>I have a newfound respect for web development</Link>
            </NextLink>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Project;
