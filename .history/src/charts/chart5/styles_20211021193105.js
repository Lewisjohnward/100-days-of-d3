import styled from "styled-components";

export const Frame = styled.div`

  margin: auto;
`;

export const ChartContainer = styled.div`
  position: relative;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 5% 1%;
  box-sizing: border-box;
`;

export const Svg = styled.svg`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  background: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border: solid 2px;
  border-bottom-color: #ffe;
  border-left-color: #eed;
  border-right-color: #eed;
  border-top-color: #ccb;
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
