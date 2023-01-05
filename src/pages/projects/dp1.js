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
} from "@chakra-ui/react";
import { Title, ProjectImage } from "../../components/project";
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
      
        <Heading variant="section-title">Milestones</Heading>
        <Accordion allowToggle allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <b>Milestone 0 - 1</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Pdf src="/public/pdf/mm0-1.pdf" />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Heading variant="section-title">Skills Applied</Heading>
        placeholder.
        <Heading variant="section-title">Images</Heading>
        placeholder.
        <Heading variant="section-title">Gantt Chart</Heading>
        <Gantt>
          <Mermaid id="gantt" chart={`
                gantt
                title Design Portfolio 1
                dateFormat  YYYY-MM-DD
                axisFormat  %b-%Y
                tickInterval 1month

                section Section
                  A task           :a1, 2022-01-01, 30d
                  Another task     :after a1  , 20d

                section Another
                  Task in sec      :2022-01-12  , 50d
                  another task     :24d
                  more tasks       :2022-01-30 , 30d

                section Last Section
                  Task in sec      :2022-03-12  , 12d
                  another task     :24d
                  more tasks       :2022-03-30 , 30d
            `}>
          </Mermaid>
        </Gantt>
        <Heading variant="section-title">Design Report</Heading>
      </Container>
    </Layout>
  );
};

export default Project;
