import {
  Badge,
  Container,
  Heading,
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
    <Layout title="VRC: Tipping Point">
      <Container>
        <Title>
          VRC Season: Tipping Point <Badge>2021-2022</Badge>
        </Title>
        <Paragraph>
          Code for team 1104A&apos;s robot for the VRC game &quot;Tipping
          Point&quot;. Control code is more complex than last years, including
          filtering with Kalman filters for sensor data, EMA filters for PID
          control, and a trapezoidal motion profile generator for various
          movements.
        </Paragraph>

        <List ml={4} my={4}>
          <ListItem>
            <ProjectMeta>Repo</ProjectMeta>
            <Link
              href="https://github.com/Discobots-1104A/2021-2022-branch-sample"
              isExternal
            >
              2021-2022-branch-sample <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
            C++, PROS
          </ListItem>
          <ListItem>
            <ProjectMeta>Blogpost</ProjectMeta>
            <NextLink href="/construction" passHref>
              <Link>VEX 2021-2022 Season Recap</Link>
            </NextLink>
          </ListItem>
        </List>

        <ProjectImage src="/images/projects/tipping-point/robot.jpg" />
        <Heading variant="image-caption">
          <em>
            Note: our robot was donated to 1104Z because half of our team could
            not go to worlds due to IB exam conflicts.
          </em>
        </Heading>
        <br />

        <ProjectImage src="/images/projects/tipping-point/robot2.jpg" />
      </Container>
    </Layout>
  );
};

export default Project;
