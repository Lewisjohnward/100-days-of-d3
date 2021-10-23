import styled from "styled-components";

export const Frame = styled.div`
  
`;

export const ChartContainer = styled.div`
  position: relative;
`;

export const Svg = styled.svg`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  background: white;
  margin-left: 10px;
  margin-top: 10px;
  font-size: 0.7em;
  line {
    stroke: gray;
    opacity: 0.6;
    shape-rendering: crispEdges;
  }

  text {
    font-style: italic;
    fill: gray;
  }

  .rect {
    fill: seagreen;

    .five {
      fill: crimson;
    }
  }
`;
