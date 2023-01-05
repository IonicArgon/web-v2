import styled from "@emotion/styled";
import mermaid from "mermaid";

const GanttContainer = styled.div`
  overflow: auto;
  border-radius: 0.5rem;
  background-color: #8ec07c;
  box-shadow: 0 0 10px #8ec07c;
  padding-left: 2rem;
`;

const Gantt = ({ children }) => {
  return (
    <GanttContainer>
      {children}
      <script>
        {mermaid.initialize({ startOnLoad: true, theme: "forest" })}
      </script>
    </GanttContainer>
  )
}

export default Gantt;