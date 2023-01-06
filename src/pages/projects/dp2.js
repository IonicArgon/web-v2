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
import { Mermaid } from "mdx-mermaid/Mermaid";
import Gantt from "../../components/gantt";
import Pdf from "../../components/pdf";

const Project = () => {
  return (
    <Layout title="Design Portfolio 2">
      <Container>
        <Title>
          Design Portfolio 2 <Badge>2022</Badge>
        </Title>
        <ProjectImage
          src="/images/projects/dp2/dp2-cad.png"
          alt="Cad model of the CHILES."
        />

        <Heading variant="section-title">Overview</Heading>
        <Paragraph>
          Our team was given the patient profile for Jackie Chiles, a patient with a history of chronic hip pain stemming from his childhood. The pain has caused him to take on a more sedentary lifestyle, which has led to weight gain and a worsening of his hip pain. He is looking for a solution to his hip pain that will allow him to return to his active lifestyle.
        </Paragraph>
        <br />
        <Paragraph>
          According to patient history and the research our team conducted, we diagnosed him with osteoarthritis caused by undiagnosed Legg-Calve-Perthes disease. Because of the severity of his condition, a hip replacement was advised. However, due to the complex geometry of his hip joint due to the osteonecrosis, a regular hip replacement would not be possible. Therefore, we designed the <b>CHILES</b>, a custom hip replacement that would allow him to return to his active lifestyle.
        </Paragraph>
        <br />
        <Paragraph>
          The <b>CHILES</b> is a custom hip replacement that is less expensive and more durable than current systems on the market. Furthermore, it improves the quality of life of patients by allowing them to return to their active lifestyles. The acetabular cup is designed to better fit the patient&apos;s anatomy, and the femoral head is designed to better fit the patient&apos;s bone structure. The femoral head is also designed to be more durable through a mixture of a titanium alloy and carbon fibre.
        </Paragraph>

        <List ml={4} my={4}>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Start date</ProjectMeta>
              </Box>
              <Box>
                2022-10-27
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>End date</ProjectMeta>
              </Box>
              <Box>
                2022-12-07
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Role</ProjectMeta>
              </Box>
              <Box>
                Manager
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Team members</ProjectMeta>
              </Box>
              <Box>
                David Segal-Pillemer, Marco Tan, Olivia Dmitrovich, Ronav Roy Chowdhury, Safana Al-Emara
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Technical Skills</ProjectMeta>
              </Box>
              <Box>
                Material Science, Design, Prototyping, Autodesk Inventor, Python
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
                  <b>Milestone 0</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Pdf src="/pdf/dp2/mm0.pdf" />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <b>Milestone 1</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Pdf src="/pdf/dp2/mm1.pdf" />
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
              <Pdf src="/pdf/dp2/mm2.pdf" />
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
              <Pdf src="/pdf/dp2/mm3.pdf" />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <b>Milestone 4</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Pdf src="/pdf/dp2/mm4.pdf" />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Heading variant="section-title">Images</Heading>
        <ProjectImage
          src="/images/projects/dp2/dp2-print.jpg"
          alt="3D print of the CHILES."
        />
        <ProjectImage
          src="/images/projects/dp2/dp2-poster.png"
          alt="Poster board presentation of the CHILES."
        />

        <Heading variant="section-title">Gantt Charts</Heading>
        <Gantt>
          <Mermaid chart={`
            gantt
            dateFormat  YYYY-MM-DD
            title DP2 - Preliminary Gantt Chart
            axisFormat %b-%Y
            tickInterval 2week

            section Milestones
            Milestone 0: done, 2022-10-27, 2022-11-02
            Milestone 1: done, 2022-10-27, 2022-11-02
            Milestone 2: done, 2022-11-03, 2022-11-09
            Milestone 3: 2022-11-10, 2022-11-16
            Milestone 4: 2022-11-17, 2022-11-23

            section Deliverables
            IRH Summary: 2022-11-24, 2022-12-07
            Technical Deliverables: 2022-11-24, 2022-12-07
            Poster & Presentation: 2022-11-24, 2022-12-07
            Learning Portfolio: 2022-10-27, 2022-12-07
            Peer Evaluation: 2022-10-27, 2022-12-07
          `}>
          </Mermaid>
        </Gantt>
        <br />

        <Gantt>
          <Mermaid chart={`
            gantt
            dateFormat  YYYY-MM-DD
            title DP2 - Final Gantt Chart
            axisFormat %b-%Y
            tickInterval 2week

            section Milestones
            Milestone 0: done, 2022-10-27, 2022-11-02
            Milestone 1: done, 2022-10-27, 2022-11-02
            Milestone 2: done, 2022-11-03, 2022-11-09
            Milestone 3: done, 2022-11-10, 2022-11-16
            Milestone 4: done, 2022-11-17, 2022-11-23

            section Deliverables
            IRH Summary: done, 2022-12-03, 2022-12-07
            Technical Deliverables: done, 2022-11-24, 2022-12-07
            Poster & Presentation: done, 2022-12-05, 2022-12-07
            Learning Portfolio: done, 2022-10-30, 2022-12-07
            Peer Evaluation: done, 2022-10-30, 2022-12-07
          `}>
          </Mermaid>
        </Gantt>

        <Heading variant="section-title">DP2 IRH Summary</Heading>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <b>DP2 IRH Summary</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Pdf src="/pdf/dp2/dp2-irh.pdf" />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

      </Container>
    </Layout>
  );
};

export default Project;
