import { motion } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "../grid-item";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Layout = ({ children, title }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <>
        {title && (
          <Head>
            <meta property="og:title" content="{title} - Marco Tan" />
            <meta property="og:site_name" content="Marco Tan's Homepage" />
            <meta property="og:url" content="https://ionicargon.vercel.app/" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/images/profile.jpg" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta
              property="twitter:url"
              content="https://ionicargon.vercel.app/"
            />
            <meta property="twitter:title" content="{title} - Marco Tan" />
            <meta
              property="twitter:description"
              content="Hello, I'm Marco Tan!"
            />
            <meta property="twitter:image" content="/images/profile.jpg" />
            <title>{title} - Marco Tan</title>
          </Head>
        )}
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  );
};

export default Layout;
