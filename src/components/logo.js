import Link from "next/link";
import Image from "next/image";
import { useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: all 0.2s ease-in-out;
  }

  &:hover img {
    transform: scale(0.9) rotate(-5deg);
  }
`;

const Logo = () => {
  const tangentImage = `/images/tangent${useColorModeValue("", "-dark")}.png`;

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={tangentImage} width={50} height={40} alt="logo" />
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
