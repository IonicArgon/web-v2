import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { ProjectGridItem } from "../components/grid-item";

//* image resources
import placeholder from "../../public/images/placeholder.png";
import thumbChangeUp from "../../public/images/projects/thumbs/thumbChangeUp.png";
import thumbCLI from "../../public/images/projects/thumbs/thumbCLI.png";
import thumbWebsite from "../../public/images/projects/thumbs/thumbWebsite.png";

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Section>
          <Heading fontSize={20} mb={4}>
            Projects
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} spacing={4}>
            <ProjectGridItem id="cli" title="CLI" thumbnail={thumbCLI}>
              A simple CLI using Node.js{" "}
              <em>because I desperately need more Javascript practice.</em>
            </ProjectGridItem>
            <ProjectGridItem
              id="website"
              title="Portfolio Website"
              thumbnail={thumbWebsite}
            >
              Learning the basics of web design through baptism by fire. Powered
              by Next.js and ChakraUI.
            </ProjectGridItem>
          </SimpleGrid>
        </Section>

        <Section delay={0.1}>
          <Divider my={6} />
          <Heading fontSize={20} mb={4}>
            VEX Robotics
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} spacing={4}>
            <ProjectGridItem
              id="construction"
              title="VRC Season: Tipping Point"
              thumbnail={placeholder}
            >
              VRC code with substantially more cool control theory for more
              complicated game.
            </ProjectGridItem>
            <ProjectGridItem
              id="change-up"
              title="VRC Season: Change Up"
              thumbnail={thumbChangeUp}
            >
              VRC code which made use of simpler control theory for a simpler
              game.
            </ProjectGridItem>
          </SimpleGrid>
        </Section>

        <Section delay={0.2}>
          <Divider my={6} />
          <Heading fontSize={20} mb={4}>
            Silly Projects
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} spacing={4}>
            <ProjectGridItem
              id="construction"
              title="NO CRINGE GAMES"
              thumbnail={placeholder}
            >
              A simple Python Discord bot that shuns people for playing cringe
              games.
            </ProjectGridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Projects;
