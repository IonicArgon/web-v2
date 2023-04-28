import {
  Badge,
  Center,
  Container,
  Heading,
  UnorderedList,
  ListItem,
  Link,
  Box,
  List
} from "@chakra-ui/react";
import { Title, ProjectImage, ProjectMeta } from "../../components/project";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
  return (
    <Layout title="Design Portfolio 3">
      <Container>
        <Title>
          Design Portfolio 3 <Badge>2023</Badge>
        </Title>
        <Center>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/oMGegGtGb6E"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Center>
        <Heading variant="section-title">Overview</Heading>
        <Paragraph>
          The <b>outline of this</b> project compared to the previous two projects was significantly more open-ended. The only stipulations were that we make use of a sensor, we had a mechanical component moved with actuators, and we use the Raspberry Pi 4 as our microcontroller. Besides that, we needed to come up with our own demographic and problem.
        </Paragraph>
        <br />
        <ProjectImage
          src= "/images/projects/dp3/dp3-doohickey.png"
          alt="The Doohickey"
        />
        <Paragraph>
          We eventually decided we wanted to focus on an accessibility device for powered wheelchair users with progressive, neurodegenerative conditions and/or limited mobility due to paralyses or amputations. These individuals have very limited choices when it comes to controlling their wheelchairs; they either do not work given their ability or are too expensive.
        </Paragraph>

        <List ml={4} my={4}>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Start date</ProjectMeta>
              </Box>
              <Box>
                2023-01-26
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>End date</ProjectMeta>
              </Box>
              <Box>
                2023-03-03
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Role</ProjectMeta>
              </Box>
              <Box>
                Coordinator
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Team members</ProjectMeta>
              </Box>
              <Box>
                Emily Attai, Ethan Otteson, Marco Tan, Salma Baig
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Technical Skills</ProjectMeta>
              </Box>
              <Box>
                Python, Unit Testing, Raspberry Pi
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="inline-flex">
              <Box>
                <ProjectMeta>Soft Skills</ProjectMeta>
              </Box>
              <Box>
                Teamwork, Leadership, Problem-solving, Oral and written Communication, Market Research, User Research, Ideation, Prototyping, 
              </Box>
            </Box>
          </ListItem>
        </List>

        <Heading variant="section-title">Our Solution</Heading>
        <ProjectImage
          src= "/images/projects/dp3/dp3-thingamabob.png"
          alt="The Thingamabob"
        />
        <Paragraph>
          Our team created the <b>BeeAble</b>, a joystick accessory for power wheelchair users in which the joystick is controlled via head gestures. It consists of two parts:
        </Paragraph>
        <UnorderedList>
          <ListItem>
            The main unit, which goes over the joystick and contains the joystick actuator and microcontroller.
          </ListItem>
          <ListItem>
            The head unit, which is worn on the user&apos;s head and contains the orientation sensor and haptic feedback circuitry.
          </ListItem>
        </UnorderedList>
        <Paragraph>
          The microcontroller processes data from the orientation sensor and sends a command to the joystick actuator and haptic feedback circuitry. The joystick actuator moves the joystick in the direction the user is looking, and the haptic feedback circuitry vibrates the head unit to let the user know the joystick has moved in their specified direction.
        </Paragraph>

        <Heading variant="section-title">My Contribution</Heading>
        <Paragraph>
          My main contribution to this project was designing a decent chunk of the code as well as dealing with connecting the electrical hardware together. In terms of the code, I was responsible for
        </Paragraph>
        <UnorderedList>
          <ListItem>Stepper motor driver code.</ListItem>
          <ListItem>Filtered orientation sensor code.</ListItem>
          <ListItem>Haptic feedback.</ListItem>
          <ListItem>Joystick actuation.</ListItem>
          <ListItem>Gesture recognition and settings.</ListItem>
        </UnorderedList>
        <br />
        You can see the code I wrote for this project&nbsp;
        <Link href="https://github.com/IonicArgon/ibehs-dp3-program" isExternal>
          here.
        </Link>
        <br />

        <ProjectImage
          src= "/images/projects/dp3/dp3-thingamabober.png"
          alt="The Thingamabober"
        />

        <Paragraph>
          I was also the project <b>coordinator</b>. It was my responsibility to take meeting minutes during our weekly meetings, ensuring clear communication between team members, and arranging meetings outside of design studio as we saw fit.
        </Paragraph>


        <Heading variant="section-title">Takeaways</Heading>
        <Paragraph>
          In all honesty, the programming aspect of this design project went about as smooth as it could be. Unit testing all parts of the code was made easy by thoughtfully breaking down the code into small, manageable classes beforehand. The only problem that we had with this project was getting in a rush to finish it all towards the end which is a natural consequence of the first year of university being a bit of a time crunch. Nevertheless, it is still good to be aware of this and try to avoid it as much as possible in the future.
        </Paragraph>

        <Heading variant="section-title">Project Reflection</Heading>
        <Paragraph>
          Of every design project I have done so far, this one was by far the most enjoyable. I think this was because of the open-ended nature of the project. It was nice to be able to come up with our own problem and solution and not have to worry about meeting a specific set of requirements. Another thing I loved about this project was how much my teammates got along with each other, very quickly. I think this was because we were all very passionate about the project and were all very motivated to do well. I think this project was a great learning experience for me and I am very proud of what we were able to accomplish.
        </Paragraph>
      </Container>
      <br />
    </Layout>
  );
};

export default Project;
