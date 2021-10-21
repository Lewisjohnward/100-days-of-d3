import styled from "styled-components";

export const Frame = styled.div`

`;

export const ChartContainer = styled.div`
  position: relative;

  height: 100%;
  width: 100%;
  padding: 0% 1%;
  box-sizing: border-box;
`;

export const Svg = styled.svg`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  background: white;

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
