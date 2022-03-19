import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { BlogGridItem } from "../components/grid-item";

//* image resources
import placeholder from "../../public/images/placeholder.png";
import thumbChangeUp from "../../public/images/blog/thumbs/thumbChangeUp.png";

const Blog = () => {
  return (
    <Layout title="Blog">
      <Container>
        <Heading fontSize={20} mb={4}>
          Blog
        </Heading>

        <Section>
          <SimpleGrid columns={[1, 1, 2]} spacing={4}>
            <BlogGridItem
              id="construction"
              title="Javascript isn't so bad after all"
              date="2022-03-19"
              thumbnail={placeholder}
            />
            <BlogGridItem
              id="construction"
              title="I have a newfound respect for web development"
              date="2022-03-15"
              thumbnail={placeholder}
            />
          </SimpleGrid>
        </Section>

        <Section delay={0.1}>
          <SimpleGrid columns={[1, 1, 2]} spacing={4}>
            <BlogGridItem
              id="construction"
              title="My VEX 2021-2022 season recap"
              date="2022-03-05"
              thumbnail={placeholder}
            />
            <BlogGridItem
              id="construction"
              title="A mild amount of Python tomfoolery"
              date="2022-02-21"
              thumbnail={placeholder}
            />
          </SimpleGrid>
        </Section>

        <Section delay={0.2}>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <BlogGridItem
              id="change-up"
              title="My VEX 2020-2021 season recap"
              date="2021-06-15"
              thumbnail={thumbChangeUp}
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Blog;
