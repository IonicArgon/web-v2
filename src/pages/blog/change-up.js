import { Badge, Container, Heading } from "@chakra-ui/react";
import { Title, BlogImage } from "../../components/blog";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
  return (
    <Layout title="Change Up">
      <Container>
        <Title>
          VEX 2020-2021 Season Recap
          <br />
          <Badge>2020-2021</Badge>
        </Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu urna.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default Project;
