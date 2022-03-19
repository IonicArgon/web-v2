import { useEffect, useState } from "react";
import { Box, Fade, Heading, useMediaQuery } from "@chakra-ui/react";

const GreetingWrapper = ({ children }) => {
  // greeting constants
  const greetingsMorning = [
    "Good morning! I'm",
    "Bonjour! Je m'appelle",
    "Buenos días! Soy",
    "Guten Morgen! Ich bin",
    "Buongiorno! Sono",
  ];

  const greetingsAfternoon = [
    "Good afternoon! I'm",
    "Bonne après-midi! Je m'appelle",
    "Buenas tardes! Soy",
    "Guten Tag! Ich bin",
    "Buon pomeriggio! Sono",
  ];

  const greetingsEvening = [
    "Good evening! I'm",
    "Bonsoir! Je m'appelle",
    "Buenas noches! Soy",
    "Guten Abend! Ich bin",
    "Buonasera! Sono",
  ];

  const postGreetings = [
    "Welcome to my website!",
    "Bienvenue sur mon site!",
    "Bienvenido a mi sitio web!",
    "Willkommen auf meiner Website!",
    "Benvenuto sul mio sito web!",
  ];

  // states
  let [index, setIndex] = useState(0);
  let [fade, setFade] = useState(true);
  const [mounted, setMounted] = useState(false);
  let textAlignQuery = useMediaQuery("(max-width: 640px)", { noSsr: true });
  let textAlign = textAlignQuery[0] ? "center" : "left";

  // get time of day
  let time = new Date().getHours();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((index + 1) % greetingsMorning.length);
        setFade(true);
      }, 500);
    }, 3000);
  }, [index, greetingsMorning.length]);

  // get greeting array to use based on time of day
  let greeting = function (time) {
    if (time >= 0 && time < 12) {
      return greetingsMorning;
    } else if (time >= 12 && time < 18) {
      return greetingsAfternoon;
    } else {
      return greetingsEvening;
    }
  };

  return (
    <Box textAlign={mounted ? textAlign : null}>
      <Fade in={fade}>
        <Heading size="lg">{greeting(time)[index]}</Heading>
      </Fade>
      {children}
      <Fade in={fade}>
        <Heading size="lg">{postGreetings[index]}</Heading>
      </Fade>
    </Box>
  );
};

export default GreetingWrapper;
