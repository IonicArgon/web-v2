import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  Box,
  Container,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Title, ProjectImage, ProjectMeta } from "../../components/project";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { Mermaid } from "mdx-mermaid/Mermaid"
import Gantt from "../../components/gantt";
import Pdf from "../../components/pdf";

const Project = () => {
  return (
    <Layout title="Design Portfolio 1">
      <Container>
        <Title>
          Design Portfolio 1 <Badge>2022</Badge>
        </Title>
        <ProjectImage
          src="/images/projects/dp1/dp1.png"
          alt="One page slide deck for DP1."
        />

        <Heading variant="section-title">Overview</Heading>
        <Paragraph>
          Our team was given the patient profile for Carla Tortelli, an ileostomy patient with problems regarding her one-piece ostomy bag system. Due to her physically active life style and her having an ostomy higher up her digestive tract, her ostomy bag was prone to leakage.
        </Paragraph>
        <br />
        <Paragraph>
          Based on the patient profile and the research our team conducted, we designed the <b>OstoME</b>. It builds on top of the standard Velcro-emptying one-piece ostomy bag by increasing the size of the skin patch to increase adhesion during physical activity. Additionally, the skin barrier was replaced with hydrogel adhesive to reduce irritation and increase the seal between the stoma and the bag. Finally, the inside was lined with an ePTFE layer to increase durability and reduce leakage.
        </Paragraph>
        <br />
        <Paragraph>
          The <b>OstoME</b> is less expensive and more leak resistant than current systems on the product. Furthermore, it improves the quality of life of ostomy patients by being quieter and more comfortable while retaining the discreetness of a one-piece system.
        </Paragraph>

        <List ml={4} my={4}>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Start date</ProjectMeta>
              </Box>
              <Box>
                2021-09-22
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>End date</ProjectMeta>
              </Box>
              <Box>
                2021-10-31
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Members</ProjectMeta>
              </Box>
              <Box>
                Aditi Srinivas, Aleen Al Barbarawi, Josiah Kim, Marco Tan
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Technical Skills</ProjectMeta>
              </Box>
              <Box>
                Material Science, Design, Prototyping
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Soft Skills</ProjectMeta>
              </Box>
              <Box>
                Teamwork, Leadership, Problem-solving, Oral and written Communication
              </Box>
            </Box>
          </ListItem>
        </List>

        <Heading variant="section-title">Milestones</Heading>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <b>Milestone 0 and 1</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Pdf src="/pdf/dp1/mm0-1.pdf" />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <b>Milestone 2</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Pdf src="/pdf/dp1/mm2.pdf" />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <b>Milestone 3</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Pdf src="/pdf/dp1/mm3.pdf" />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Heading variant="section-title">Images</Heading>
        <ProjectImage
          src="/images/projects/dp1/dp1-lofi-model.png"
          alt="Low fidelity model of the OstoME."
        />

        <Heading variant="section-title">Gantt Charts</Heading>
        <Gantt>
          <Mermaid id="gantt" chart={`
                gantt
                title DP1 - Preliminary Gantt Chart
                dateFormat  YYYY-MM-DD
                axisFormat  %b-%Y
                tickInterval 2week

                section Milestones
                  Milestone 0: done, 2022-09-24, 1d
                  Milestone 1: done, 2022-09-24, 1d
                  Milestone 2: done, 2022-09-30, 2d
                  Milestone 3: done, 2022-10-01, 2d

                section Deliverables
                  Low Fidelity Prototype: active, 2022-10-06, 21d
                  Slide Deck: 2022-10-24, 3d
                  Presentation: 2022-10-24, 5d
                  IRH Summary: 2022-10-29, 3d
            `}>
          </Mermaid>
        </Gantt>
        <br />

        <Gantt>
          <Mermaid id="gantt" chart={`
                gantt
                title DP1 - Final Gantt Chart
                dateFormat  YYYY-MM-DD
                axisFormat  %b-%Y
                tickInterval 2week

                section Milestones
                  Milestone 0: done, 2022-09-22, 1d
                  Milestone 1: done, 2022-09-22, 1d
                  Milestone 2: done, 2022-09-22, 8d
                  Milestone 3: done, 2022-09-29, 8d

                section Deliverables
                  Low Fidelity Prototype: done, 2022-10-20, 7d
                  Slide Deck: done, 2022-10-20, 6d
                  Presentation: done, 2022-10-20, 6d
                  IRH Summary: done, 2022-10-24, 7d
            `}>
          </Mermaid>
        </Gantt>

        <Heading variant="section-title">DP1 IRH Summary</Heading>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <b>Final IRH Summary</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Pdf src="/pdf/dp1/dp1-irh.pdf" />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

      </Container>
    </Layout>
  );
};

export default Project;
