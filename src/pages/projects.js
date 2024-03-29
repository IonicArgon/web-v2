import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { ProjectGridItem } from "../components/grid-item";

//* image resources
import placeholder from "../../public/images/placeholder.png";
import thumbChangeUp from "../../public/images/projects/thumbs/thumbChangeUp.png";
import thumbCLI from "../../public/images/projects/thumbs/thumbCLI.png";
import thumbWebsite from "../../public/images/projects/thumbs/thumbWebsite.png";
import thumbTippingPoint from "../../public/images/projects/thumbs/thumbTippingPoint.png";
import thumbDP1 from "../../public/images/projects/thumbs/thumbDP1.png";
import thumbDP2 from "../../public/images/projects/thumbs/thumbDP2.png";
import thumbDP3 from "../../public/images/projects/thumbs/thumbDP3.png";
import thumbDP4 from "../../public/images/projects/thumbs/thumbDP4.png";

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
            iBioMed Design Projects
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} spacing={4}>
            <ProjectGridItem
              id="dp1"
              title="DP1 - G.I. Joe, The Endoscopy Unit"
              thumbnail={thumbDP1}
            >
              {" "}
              Innovating on the ostomy bag to make it cheaper, more comfortable, and more durable.
            </ProjectGridItem>
            <ProjectGridItem
              id="dp2"
              title="DP2 - Hips Don't Lie"
              thumbnail={thumbDP2}
            >
              {" "}
              A hip replacement device that is more comfortable and less invasive for Legg-Calve-Perthes disease patients.
            </ProjectGridItem>
          </SimpleGrid>
        </Section>
        <Section delay={0.2}>
          <SimpleGrid columns={[1, 1, 2]} spacing={4}>
            <ProjectGridItem
              id="dp3"
              title="DP3 - A Sense of Independence"
              thumbnail={thumbDP3}
            >
              {" "}
              An accessibility solution for paralysed peoples to control power wheelchairs with head gestures.
            </ProjectGridItem>
            <ProjectGridItem
              id="dp4"
              title="DP4 - Not a Pun, It's Real Life"
              thumbnail={thumbDP4}
            >
              {" "}
              A software-based approach to managing temperature sensitivity in patients with Multiple Sclerosis.
            </ProjectGridItem>
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <Divider my={6} />
          <Heading fontSize={20} mb={4}>
            VEX Robotics
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} spacing={4}>
            <ProjectGridItem
              id="tipping-point"
              title="VRC Season: Tipping Point"
              thumbnail={thumbTippingPoint}
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

        <Section delay={0.4}>
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
