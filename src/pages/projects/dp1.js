import {
  Badge,
  Container,
  Heading,
} from "@chakra-ui/react";
import { Title } from "../../components/project";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
  return (
    <Layout title="Design Portfolio 1">
      <Container>
        <Title>
          Design Portfolio 1 <Badge>2022</Badge>
        </Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
          lacinia nunc. Duis lacus purus, bibendum at mollis sit amet, venenatis
          ut libero. Proin sagittis sapien turpis, vel dignissim arcu gravida
          sit amet. Cras odio libero, suscipit sit amet imperdiet ac, imperdiet
          ut enim. Sed posuere felis vel nisl lobortis, at tristique metus
          efficitur. In ac egestas libero. Ut ligula risus, feugiat a dui sit
          amet, feugiat tempus risus. Nam nunc libero, ultricies ac metus eu,
          cursus tempor tellus. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Pellentesque at maximus
          lacus. Nunc in velit convallis, tincidunt neque at, bibendum leo.
          Nulla et elit dolor. Praesent id odio eros. Praesent tincidunt libero
          metus, id placerat odio rutrum at.
        </Paragraph>
        <Heading variant="section-title">Overview</Heading>
        placeholder.
        <Heading variant="section-title">Milestones</Heading>
        placeholder.
        <Heading variant="section-title">Skills Applied</Heading>
        placeholder.
        <Heading variant="section-title">Gantt Chart</Heading>
        placeholder.
        <Heading variant="section-title">Design Report</Heading>
        placeholder.
      </Container>
    </Layout>
  );
};

export default Project;
