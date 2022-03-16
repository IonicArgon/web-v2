import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Skill = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
  align-items: center;
`;

export const SkillIcon = styled.span`
  padding: 0.1em;
  font-size: 3em;
  color: ${(props) => props.color};
`;
