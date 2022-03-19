import {
  Badge,
  Container,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
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

        <Heading variant="section-title">TL;DR</Heading>
        <UnorderedList>
          <ListItem>
            <CheckIcon /> The code was significantly better than last year.
          </ListItem>
          <ListItem>
            <CheckIcon /> The game was much easier to code for.
          </ListItem>
          <ListItem>
            <CheckIcon /> Build quality is pretty smexy.
          </ListItem>
          <ListItem>
            <CloseIcon /> Wow, VEX hardware <b>sucks.</b>
          </ListItem>
          <ListItem>
            <CloseIcon /> Wow, the REC Foundation <b>sucks.</b>
          </ListItem>
          <ListItem>
            <CloseIcon /> Wow, code is hard to write without sensors.
          </ListItem>
        </UnorderedList>
        <br />

        <Heading variant="section-title">
          If At First You Don&apos;t Succeed
        </Heading>
        <Paragraph>
          If I&apos;m being completely honest, last year&apos;s code was
          absolutely garbage. I made zero use of concurrency using the PROS
          implementation of RTOS, I had zero abstraction and encapsulation, and
          the autonomous code was an utter mess. Actually,
          <em>
            {" "}
            I don&apos;t even think the autonomous routine was anything past a
            one point autonomous routine too, so...
          </em>
        </Paragraph>
        <br />
        <Paragraph>
          You should always seed to improve your code, even if it already works.
          That isn&apos;t to say that entire codebases should be refactored with
          &quot;more efficient&quot; algorithms and comments be sprinkled onto
          every getter and setter function, but if you have code that{" "}
          <b>you know</b> is bad but is still being used, that should be fixed
          eventually.
        </Paragraph>
        <br />
        <Paragraph>
          Thus why this year, I made use of the things I&apos;ve neglected last
          year to do it justice. I didn&apos;t spam the hell out of them, but I
          did enough to make myself feel proud of it. I think the most important
          change I made was using a good PID algorithm since last year&apos;s
          code was pretty much a &quot;clasp your hands together and pray to
          Lord in Heaven that the code will work&quot; situation so it&apos;
          nice that I wrote code that was a massive improvement from the naive
          solutions I used last year.
        </Paragraph>

        <Heading variant="section-title">
          still too tired to complete it lol
        </Heading>
      </Container>
    </Layout>
  );
};

export default Blog;
