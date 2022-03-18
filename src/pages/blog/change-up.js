import {
  Badge,
  Container,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Title, BlogImage } from "../../components/blog";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Blog = () => {
  return (
    <Layout title="Change Up">
      <Container>
        <Title>
          VEX 2020-2021 Season Recap
          <br />
          <Badge>2021-06-15</Badge>
        </Title>
        <BlogImage src="/images/blog/change-up/robot.png" />
        <Heading variant="image-caption">
          The second iteration of our robot during the season.
        </Heading>
        <br />

        <Heading variant="section-title">As Things Heat Up</Heading>
        <Paragraph>
          It of course, has to slow down to a halt. The code I wrote this year
          was basically like the entire codebase of TempleOS compared to last
          year&apos;s code. It really was going to be beautiful; it was going to
          be the more glamorous thing on the competition field. And then the
          COVID-19 pandemic came along. Nonetheless, I still had a great time,
          though it didn&apos;t come without its ups and downs.
        </Paragraph>
        <br />

        <Heading variant="section-title">TL;DR</Heading>
        <UnorderedList>
          <ListItem>Good software sucks on bad hardware.</ListItem>
          <ListItem>Virtual competitions stink.</ListItem>
          <ListItem>No one cares about good practices (apparently).</ListItem>
        </UnorderedList>
        <br />

        <Heading variant="section-title">It&apos;s Not All Software</Heading>
        <Paragraph>
          Most of the time, the software you write is bad because you are bad.
          However, there come times where you are allowed to blame others for
          misfortunes. Dependencies make up a large portion of development and
          they are usually expected not to fail lest all hell reigns loose; if,
          say a library for time-related stuff suddenly fails, the whole world
          would most likely implode in on itself. However (believe it or not),
          dependencies <b>don&apos;t have to be code only.</b> Hardware is as
          much of a valid dependency as software is. And that&apos;s where I
          have a huge bone to pick.
        </Paragraph>
        <br />

        <Paragraph>
          You can&apos;t really write good control code without any sort of
          outside sensor input. As much as I love my organization, they do have
          a really big habit of using minimal amounts of sensors, if any at all.
          It&apos;s essentially the same as driving the robot blind except
          worse. Whereas a human could train to make up for their lack of
          vision, code (that is not machine learning) is inherently linear and
          will <b>do the exact same thing over and over again.</b> I can spend
          all the time in the world writing cool class abstractions and an
          amazing and versatile PID controller class but if I don&apos;t even
          have the sensors to use them, then what&apos;s the point?
        </Paragraph>
        <br />

        <Paragraph>
          Then comes the REC Foundation and their ineptitude with everything
          they lay their hands on. The V5 system was supposed to be a godsend
          replacement compared to the original V4 system. However, thanks to
          them rushing the release of the system, V5 hardware is{" "}
          <b>riddled with problems.</b>
        </Paragraph>
        <br />

        <UnorderedList>
          <ListItem>
            Whoever thought it was a good idea to put the motor temperature
            sensor <b>on the PCB</b> instead of
            <b> on the motor housing?</b> Literally what?
          </ListItem>
          <ListItem>
            The V5 Vision sensor cannot see <b>at all</b> in low-light
            conditions.
            <em>
              Would be great if we could use the VEX flashlight to illuminate
              the viewing area of the sensor...
            </em>{" "}
            <b>...if it was actually competition legal.</b>
          </ListItem>
          <ListItem>
            The &quot;<b>Smart</b>&quot; ports randomly fry from static friction
            because they didn&apos;t even ground the PCBs.
          </ListItem>
        </UnorderedList>
        <br />

        <Paragraph>
          You would think they would have fixed these problems in subsequent
          hardware updates but <b>nope.</b> Just as defective as the initial
          release. Absolutely mind-boggling.
        </Paragraph>
        <br />

        <BlogImage src="/images/blog/change-up/robot2.jpg" />
        <Heading variant="image-caption">
          The final iteration of the robot being built.
        </Heading>
        <br />

        <Paragraph>
          to be finished soon im too tired to finish this rn it&apos;s 01:52 am lo
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Blog;
