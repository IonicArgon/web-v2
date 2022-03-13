import { useEffect, useState } from "react";
import { Fade, Heading } from "@chakra-ui/react";

const GreetingWrapper = ({ children }) => {
  const greetings = [
    "Hello! I'm",
    "Bonjour! Je m'appelle",
    "Hola! Me llamo",
    "Ciao! Mi chiamo",
  ];
  const postGreetings = [
    "Welcome to my website!",
    "Bienvenue sur mon site!",
    "Bienvenido a mi sitio web!",
    "Benvenuto sul mio sito web!",
  ];
  let [index, setIndex] = useState(0);
  let [fade, setFade] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((index + 1) % greetings.length);
        setFade(true);
      }, 500);
    }, 3000);
  }, [index, greetings.length]);

  return (
    <>
      <Fade in={fade}>
        <Heading size="lg">{greetings[index]}</Heading>
      </Fade>
      {children}
      <Fade in={fade}>
        <Heading size="lg">{postGreetings[index]}</Heading>
      </Fade>
    </>
  );
};

export default GreetingWrapper;
