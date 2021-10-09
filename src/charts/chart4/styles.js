import styled from "styled-components";

export const Frame = styled.div`
  height: ${({ small }) => (small ? "50px" : "350px")};
  width: ${({ small }) => (small ? "250px" : "350px")};
  background-color: #ddc;
  border: solid 1vmin #eee;
  border-bottom-color: #fff;
  border-left-color: #eee;
  border-radius: 2px;
  border-right-color: #eee;
  border-top-color: #ddd;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,
    0 5px 10px 5px rgba(0, 0, 0, 0.25);

  position: relative;
  text-align: center;
  &:before {
    border-radius: 2px;
    bottom: -0.4vmin;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;
    content: "";
    left: -0.4vmin;
    position: absolute;
    right: -0.4vmin;
    top: -0.4vmin;
  }
  &:after {
    border-radius: 2px;
    bottom: -0.5vmin;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
    content: "";
    left: -0.5vmin;
    position: absolute;
    right: -0.5vmin;
    top: -0.5vmin;
  }
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

    .five{
    fill : crimson;
  }
  }

  
`;

export const DescriptionContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  background: white;
`;

export const Description = styled.p`
  text-align: left;
  font-size: 0.7em;
`;

export const Signature = styled.p`
  text-align: left;
  font-style: italic;
  font-size: 0.6em;
`;
