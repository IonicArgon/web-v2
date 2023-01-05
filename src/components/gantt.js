import styled from "@emotion/styled";
import mermaid from "mermaid";

const GanttContaniner = styled.div`
  overflow-x: auto;
  border-radius: 0.5rem;
  background-color: #282828;
  box-shadow: 0 0 10px #282828;
`;

const Gantt = ( { children } ) => {
  return (
    <GanttContaniner>
      {children}
      <script>
        {mermaid.initialize({ startOnLoad: true, theme: "dark" })}
      </script>
    </GanttContaniner>
  )
}

export default Gantt;