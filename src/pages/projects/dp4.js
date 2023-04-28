import {
  Badge,
  Container,
  Heading,
  List,
  ListItem,
  Box,
  Link,
  Center
} from "@chakra-ui/react";
import { Title, ProjectImage, ProjectMeta } from "../../components/project";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import NextLink from "next/link";

const Project = () => {
  return (
    <Layout title="Design Portfolio 4">
      <Container>
        <Title>
          Design Portfolio 4 <Badge>2023</Badge>
        </Title>

        <ProjectImage src="/images/projects/dp4/dp4-1.png" alt="Design Portfolio 4" />
        
        <Heading variant="section-title">Overview</Heading>
        <Paragraph>
          Compared to the&nbsp;
          <NextLink href="/projects/dp3" passHref>
            <Link>previous project </Link>
          </NextLink>
          , this <b>project outline</b> was a bit more restrictive, only because we had to design a practical solution for a real patient this time. Our patient was a 60 year-old woman diagnosed with multiple sclerosis who suffered from a multitude of symptoms, most notably temperature sensitivity. 
        </Paragraph>
        <br />
        <Paragraph>
          We eventually decided on a software-based approach to her temperature sensitivity problems by creating a prototype application which would tell her how long she can stay outside before she starts to feel uncomfortable. This would be done by estimating time based on temperature, geographic location, and the patient&apos;s personal preferences to create a predictive model.
        </Paragraph>

        <List ml={4} my={4}>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Start date</ProjectMeta>
              </Box>
              <Box>
                2023-03-03
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>End date</ProjectMeta>
              </Box>
              <Box>
                2023-04-12
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Role</ProjectMeta>
              </Box>
              <Box>
                Administrator
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Team members</ProjectMeta>
              </Box>
              <Box>
                Jennifer Francis, Krishna Bhatt, Mani Nabovati Khormazard, Marco Tan
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Technical Skills</ProjectMeta>
              </Box>
              <Box>
                Python with <em>Tkinter, serial, numpy, requests,</em> object-oriented programming, Raspberry Pi
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Soft Skills</ProjectMeta>
              </Box>
              <Box>
                Teamwork, Leadership, Problem-solving, Oral and written Communication, User Research, Ideation, Prototyping
              </Box>
            </Box>
          </ListItem>
        </List>

        <Heading variant="section-title">Our Solution</Heading>
        <Paragraph>
          We created <b>Atmospheria</b>, an application that would tell the patient how long she can stay outside before she starts to feel uncomfortable. It uses a numpy model to predict the time based on temperature, geographic location, and the patient&apos;s personal preferences. The application is designed to be used on a Raspberry Pi as a stand-in for a wearable technology such as an Apple Watch.
        </Paragraph>
        <br />
        <Center>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AEKWMiVXzY8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </Center>
        <br />
        <Paragraph>
          We used <em>Tkinter</em> to create the GUI on the Raspberry Pi and <em>serial</em> to pull data from our GPS hat. We also used <em>requests</em> to pull data from the OpenWeatherMap API and <em>numpy</em> to generate our single-variable quadratic regression model. 
        </Paragraph>

        <Heading variant="section-title">My Contribution</Heading>
        <Paragraph>
          My main contributions to this project were designing the user interface and linking all parts of the project together into a cohesive, deployable application. You can see the code for the application&nbsp;
          <Link href="https://github.com/IonicArgon/dp4-pi-code" isExternal>
            here.
          </Link>
        </Paragraph>
        <br />
        <Paragraph>
          Being the team&apos;s <b>administrator</b>, it was also my responsibility to ensure that the team was on track to meet our deadlines and that everyone was contributing equally. I also had to make sure project deliverables were submitted on time and that the team was prepared for our presentation.
        </Paragraph>

        <Heading variant="section-title">Takeaways</Heading>
        <Paragraph>
          Design projects are always a great way to learn new skills, but it is also helpful for honing certain skills. Not all groups of people in a team will work well together, and it is important to be able to identify and resolve conflicts as they arise. The biggest issue I identified in this team was a lack in communication between team members due to my teammates&apos; more introverted personalities. I did not let this become a problem, however, as I made sure to check in with everyone regularly and made sure everyone was on the same page.
        </Paragraph>
        <br />
        <Paragraph>
          Another really big takeaway from this project was the importance of setting realistic goals. We did not have as much time as we would&apos;ve liked to work on this project, so we had to make sure that we were not overextending ourselves. However, we did end up initially designing a rather ambitious project with hardware interfaces and a mobile application. We had to scale back our project to something more manageable, and I think we did a good job of that.
        </Paragraph>

        <Heading variant="section-title">Project Reflection</Heading>
        <Paragraph>
          Although it was&apos;t the big bang I wanted to end off my first year with, I am still proud of what my team and I were able to accomplish. We were able to create a working prototype that could be used by our patient to help her manage her temperature sensitivity. 
        </Paragraph>
      </Container>
      <br />
    </Layout>
  );
};

export default Project;
