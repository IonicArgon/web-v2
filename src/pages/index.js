import {
  Box,
  Button,
  Container,
  chakra,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import GreetingWrapper from "../hooks/greeting";
import Image from "next/image";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { Timeline, TimelineDate } from "../components/timeline";
import { Skill, SkillIcon } from "../components/skills";
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoFacebook,
  IoLogoLinkedin,
} from "react-icons/io";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop),
});

const Page = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Box display={{ md: "flex" }}>
          <Box flexShrink={1}>
            <GreetingWrapper>
              <Heading size="3xl">Marco Tan.</Heading>
            </GreetingWrapper>
          </Box>
          <Box
            flexShrink={1}
            mt={{ base: "4", md: "0" }}
            ml={{ md: "auto" }}
            align="center"
          >
            <Box
              borderColor={useColorModeValue("#7c6f64", "#a89984")}
              borderWidth={2}
              borderStyle="solid"
              boxSize="138px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/profile.jpg"
                alt="Profile"
                borderRadius="full"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading variant="section-title">About me 📝</Heading>
          <Paragraph>
            Marco is a student and hobbyist programmer in Brampton, Ontario with
            a passion for STEM. He loves anything hands-on, especially when it
            comes to inventing, designing, and creating robotic systems. He is
            pursuing a career in mechatronics engineering. Currently, he is a
            mentor for his robotics organization,{" "}
            <Link href="https://www.bramptonrobotics.org/" isExternal>
              Brampton Robotics
            </Link>
            .
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <Heading variant="section-title">Timeline 📅</Heading>
          <Timeline>
            <TimelineDate>2004</TimelineDate>
            Born in Toronto, Canada.
          </Timeline>
          <Timeline>
            <TimelineDate>2018</TimelineDate>
            Entered Turner Fenton Secondary school in Brampton, Ontario, IB
            Diploma Program.
          </Timeline>
          <Timeline>
            <TimelineDate>2019</TimelineDate>
            Joined Brampton Robotics as part of team 1104A.
          </Timeline>
          <Timeline>
            <TimelineDate>Present</TimelineDate>
            Mentors for Brampton Robotics.
          </Timeline>
        </Section>
        <Section delay={0.3}>
          <Heading variant="section-title">Things I ❤</Heading>
          <Paragraph>
            Music, Video Games, Playing Saxophone, Medicine, Mechatronics,
            Robotics
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading variant="section-title">Things I 🧠</Heading>
          <Skill>
            <SkillIcon color="#458588">
              <i className="devicon-cplusplus-plain"></i>
            </SkillIcon>
            <SkillIcon color="#fabd2f">
              <i className="devicon-javascript-plain"></i>
            </SkillIcon>
            <SkillIcon color="#458588">
              <i className="devicon-lua-plain"></i>
            </SkillIcon>
            <SkillIcon color="#d79921">
              <i className="devicon-python-plain"></i>
            </SkillIcon>
            <SkillIcon color="#d65d0e">
              <i className="devicon-rust-plain"></i>
            </SkillIcon>
            <SkillIcon color="#fe8019">
              <i className="devicon-illustrator-plain"></i>
            </SkillIcon>
            <SkillIcon color="#83a598">
              <i className="devicon-photoshop-plain"></i>
            </SkillIcon>
          </Skill>
        </Section>
        <Section delay={0.5}>
          <Heading variant="section-title">On the 🌐</Heading>
          <List>
            <ListItem>
              <Link href="https://www.facebook.com/marco.tan.200405" isExternal>
                <Button
                  variant="ghost"
                  color="#8ec07c"
                  leftIcon={<IoLogoFacebook />}
                >
                  Marco Tan
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/IonicArgon" isExternal>
                <Button
                  variant="ghost"
                  color="#8ec07c"
                  leftIcon={<IoLogoGithub />}
                >
                  @IonicArgon
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/marco_tan_04/" isExternal>
                <Button
                  variant="ghost"
                  color="#8ec07c"
                  leftIcon={<IoLogoInstagram />}
                >
                  @marco_tan_04
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://www.linkedin.com/in/marco-tan-9191021a3/"
                isExternal
              >
                <Button
                  variant="ghost"
                  color="#8ec07c"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @marcotan04
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
