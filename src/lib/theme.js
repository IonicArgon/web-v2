import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#fbf1c7", "#282828")(props),
      color: mode("#7c6f64", "#a89984")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
      "image-caption": {
        fontSize: 14,
        textAlign: "center",
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#458588", "#b16286")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const colors = {};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const fonts = {
  heading: "Varela Round, sans-serif",
  body: "Varela Round, sans-serif",
};

const theme = extendTheme({
  colors,
  components,
  config,
  styles,
  fonts,
});

export default theme;
