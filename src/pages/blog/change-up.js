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
          Lord in Heaven that the code will work&quot; situation so it&apos;s
          nice that I wrote code that was a massive improvement from the naive
          solutions I used last year.
        </Paragraph>

        <Heading variant="section-title">Easy Game, Easy Gains</Heading>
        <Paragraph>
          Seriously, I&apos;m honestly surprised at how easy the game was this
          year compared to the massive dumpster fire that was last year&apos;s
          game. This game was a lot more predictable and made writing autonomous
          routines pretty easy. The only hiccup though is something that I have
          a bone to pick with, but that comes later.
        </Paragraph>
        <br />

        <BlogImage src="/images/blog/change-up/field.jpeg" />
        <Heading variant="image-caption">
          The game field. <em>It doesn&apos;t get simpler than this.</em>
        </Heading>
        <br />

        <Heading variant="section-title">
          🧑‍🍳 <em>*chef kiss*</em> Beautiful Build Quality
        </Heading>
        <Paragraph>
          All of our robot designs from the beginning to the end had beautiful
          build quality&mdash;it&apos;s probably because we found out about the
          brilliant world of <em>computer-aided design.</em> We did not make
          full use of CAD last year and that really messed us up, especially
          since we would end up making last minute changes as we were building
          the robot. This year, we there wasn&apos;t much faffing about when we
          got to building the robot, and look how that turned out.
        </Paragraph>
        <br />

        <BlogImage src="/images/blog/change-up/robot2.jpg" />
        <Heading variant="image-caption">
          <em>much wow. such photogenic.</em>
        </Heading>
        <br />

        <Heading variant="section-title">Here Comes The Ugly...</Heading>
        <Paragraph>
          About ninety-five percent of the time, when the code doesn&apos;t
          work, it&apos;s usually your fault; it could be a simple error like a
          missing semicolon, or something egregious like a segmentation fault.
          However, the other five percent of the time, someone completely out of
          your control breaks your code. Of that five percent, ninety percent of
          it is due to dependencies and the the ones that make and maintain it.
          Believe it or not, in a systems programming situation like this,
          <em>hardware is the biggest dependency in a project.</em>
        </Paragraph>
        <br />
        <Paragraph>
          You would think that after three years since the initial release of
          the VEX V5 system, the REC Foundation would have been able to iron out
          all of the issues with the system. <em>Apparently not,</em> because
          the hardware suffers from the
          <em>same issues from 2018.</em> Here are some pretty mind-boggling
          problems that still persist in their released hardware:
        </Paragraph>
        <br />

        <UnorderedList>
          <ListItem>
            Who thought it was a good idea to have the circuit board on the
            Brain
            <em> ungrounded</em>?
          </ListItem>
          <ListItem>
            Actually,{" "}
            <em>
              who thought it was a good idea to have all the Smart ports
              ungrounded
            </em>
            ?
          </ListItem>
          <ListItem>
            The temperature sensors for the motors are mounted{" "}
            <b>on the PCB </b>
            instead of <b>on the motor casing</b>. Means the motors constantly
            overheat and throttle hard.
          </ListItem>
          <ListItem>
            The tolerances in manufacturing the rotation sensors are way too
            low. To the point where some sensors are just defective{" "}
            <em>even with proper filtering code.</em>
          </ListItem>
          <ListItem>
            A school iPad&apos;s screen is more responsive than the Brain&apos;s
            LCD.
          </ListItem>
          <ListItem>
            The VEX Vision Sensor is basically useless in even moderate lighting
            conditions. It would help if we could use the VEX Flashlight to
            illuminate the area, but <em>it&apos;s not competition legal.</em>
          </ListItem>
        </UnorderedList>
        <br />

        <Heading variant="section-title">
          Virtual Competitions Are Heinous
        </Heading>
        <Paragraph>
          I get it, COVID-19 and restrictions make hosting in-person
          competitions pretty much impossible. But{" "}
          <em>the amount of glitches</em> that happened during virtual
          competitions, as well as the amount of finessing that happened?
          <em> Oh god.</em>
        </Paragraph>
        <br />
        <Paragraph>
          <b>
            bro one team literally turned off their camera after everyone had to
            stop driving and they moved their robot to touch a goal to get extra
            points, that&apos;s not even fair.
          </b>
        </Paragraph>
        <br />
        <Paragraph>
          <b>
            half the time our robot would disconnect from the field system
            because we were connecting to competition software hosted across the
            border, bruh.
          </b>
        </Paragraph>
        <br />

        <Heading variant="section-title">Coding Blind</Heading>
        <Paragraph>
          As much as I love my organization, I have a bone to pick with them.{" "}
          <em> we use like, zero sensors.</em> A robot with good code and no
          sensors is like if you shoved a Bugatti Veyron engine into the body of
          a Honda Civic. The hardware matters as much as the software does in
          systems programming and when you are given zero external input about
          your surroundings, you might as well be coding blind.
        </Paragraph>

        <Heading variant="section-title">New Season, New Beginnings</Heading>
        <Paragraph>
          With a new game comes a time to correct the wrongs that have happened
          this season. Although I was pretty proud of what I&apos;ve done this
          year, there&apos;s always room for improvement.{" "}
          <em>
            I probably won&apos;t be convincing the REC Foundation to fix their
            hardware issues anytime soon,
          </em>{" "}
          but I can at least improve my skill set, coding knowledge-wise and 
          problem solving-wise. This new game, &quot;Tipping Point&quot;, seems
          like it&apos;s going to help me with just that&mdash;it looks pretty
          challenging and there&apos;s a lot of unique problems I&apos;m going to
          have to try solving, but that&apos;s where the fun is.
        </Paragraph>
        <br />
        <Paragraph>
          I&apos;ll see you all in next year&apos;s season!
        </Paragraph>
        <br />
        
      </Container>
    </Layout>
  );
};

export default Blog;
