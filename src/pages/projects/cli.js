import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, ProjectMeta } from "../../components/project";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
  return (
    <Layout title="CLI">
      <Container>
        <Title>
          CLI <Badge>2022</Badge>
        </Title>
        <Paragraph>
          A CLI that basically acts like a business card. Wrote it to practice
          writing in Javascript because I&apos;m still not used to it
          completely. Used axios, chalk, figlet, gradient-string, inquirer, and
          open.
        </Paragraph>

        <List ml={4} my={4}>
          <ListItem>
            <ProjectMeta>Version</ProjectMeta>
            1.0.1
          </ListItem>
          <ListItem>
            <ProjectMeta>Repo</ProjectMeta>
            <Link href="https://github.com/IonicArgon/cli" isExternal>
              CLI <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>NPM Page</ProjectMeta>
            <Link href="https://www.npmjs.com/package/marco-tan-cli" isExternal>
              marco-tan-cli <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
            Javascript, Node.js
          </ListItem>
          <ListItem>
            <ProjectMeta>Blogpost</ProjectMeta>
            <NextLink href="/construction" passHref>
              <Link>Javascript isn&apos;t so bad after all</Link>
            </NextLink>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/projects/cli/cli.png"
          alt="Example usage of the CLI."
        />
      </Container>
    </Layout>
  );
};

export default Project;
