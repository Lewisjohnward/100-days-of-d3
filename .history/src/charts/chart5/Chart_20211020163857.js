import { useState } from "react";
import { useGetData } from "./useGetData";
import {
  randomInt,
  range,
  scaleLinear,
  scaleTime,
  max,
  bin,
  extent,
  timeMonths,
  sum,
  scaleBand,
  timeFormat,
} from "d3";
import {
  Frame,
  Svg,
  ChartContainer,
  Description,
  DescriptionContainer,
  Signature,
} from "./styles";

const margin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 40,
};

const height = 700;
const width = 1000;

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const array = range(100);
const data = array.map((d, i) => {
  return {
    a: i,
    b: i,
  };
});
console.log(data)
const xValue = d => d.a
const yValue = d => d.b

const xScale = scaleBand()
  .domain(data.map(xValue))
  .range([0, innerWidth]);

  console.log(xScale(5))

const yScale = scaleBand()
  .domain(data.map(yValue))
  .range([innerHeight, 0]);

export const Chart = () => {

  if (!data) {
    return null;
  }

  return (
    <Frame>
      <ChartContainer>
        <Svg height={height} width={width}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {data.map((d) => (
              <g transform={`translate(${xScale(xValue(d))}, ${yScale(yValue(d))})`}>
                <rect
                  height={yScale.bandwidth()}
                  width={xScale.bandwidth()}
                  fill="black"
                />
              </g>
            ))}
          </g>
        </Svg>

        <Frame small={"true"}>
          <DescriptionContainer>
            <Description>
              Number of lessons done per month on Italki
            </Description>
            <Description>Cumulative Bar Chart on SVG With D3</Description>
            <Signature>09/10/21 - L Ward</Signature>
          </DescriptionContainer>
        </Frame>
      </ChartContainer>
    </Frame>
  );
};

const Mark = ({ x, y, width, height, fill }) => {
  const [tooltipVisible, setToolTipVisible] = useState(false);

  return (
    <>
      <rect x={x} y={y} width={width} height={height} fill={fill} />
      {tooltipVisible && (
        <rect x={x + 10} y={y - 25} height={50} width={50} rx={5} />
      )}
    </>
  );
};
