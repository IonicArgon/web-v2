import {
  Badge,
  Box,
  Center,
  Container,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, ProjectMeta } from "../../components/project";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
  return (
    <Layout title="VRC: Change Up">
      <Container>
        <Title>
          VRC Season: Change Up <Badge>2020-2021</Badge>
        </Title>
        <Paragraph>
          Code for team 1104A&apos;s robot for the VRC game &quot;Change
          Up&quot;. Makes use of basic tracking sensors and a simple PID loop to
          move around as well as colour sensors for ball detection and sorting.
          Code was submitted to the Annotated Programming Skills Challenge.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Repos</ProjectMeta>
              </Box>
              <Box>
                <Link href="https://github.com/IonicArgon/pain-peko" isExternal>
                  Refactored <ExternalLinkIcon mx="2px" />
                </Link>
                {"  "}
                <Link
                  href="https://github.com/IonicArgon/2020-2021-bionic-beaver/tree/marco-dec_2020"
                  isExternal
                >
                  Original <ExternalLinkIcon mx="2px" />
                </Link>
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
            C++, PROS
          </ListItem>
          <ListItem>
            <ProjectMeta>Blogpost</ProjectMeta>
            <NextLink href="/blog/change-up" passHref>
              <Link>VEX 2020-2021 Season Recap</Link>
            </NextLink>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/projects/change-up/robot.png"
          alt="Final iteration robot for this season."
        />

        <Center>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/OS1HnUw7RkU?controls=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Center>
      </Container>
    </Layout>
  );
};

export default Project;
