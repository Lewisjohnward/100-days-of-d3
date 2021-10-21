import { useState, useEffect } from "react";
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

export const Chart = () => {
  const data1 = useGetData();

  if (!data1) {
    return null;
  }

  console.log(data1);
  const count = Array.from(
    data1.reduce((r, c) => r.set(c, (r.get(c) || 0) + 1), new Map()),
    ([key, count]) => ({ key, count })
  );

  console.log(count.sort((a, b) => b.count - a.count));
  console.log(Math.sqrt(count.length));

  const array = range(Math.floor(Math.sqrt(count.length)));
  const data = [];
  var num = 0;
  array.forEach((d, i) => {
    array.forEach((e, j) => {
      data.push({
        a: d,
        b: j,
        word: count[num].key,
        count: count[num].count,
      });
      num++;
    });
  });

  console.log(data);
  const xValue = (d) => d.a;
  const yValue = (d) => d.b;
  const countValue = d => d.count

  const xScale = scaleBand().domain(data.map(xValue)).range([0, innerWidth]);

  console.log(xScale(5));

  const yScale = scaleBand().domain(data.map(yValue)).range([innerHeight, 0]);

  const colorScale = scaleLinear()
    .domain([0, max(data, countValue)])
    .range(["#3FBF3F", "#BF3F3F"]);

  return (
    <Frame>
      <ChartContainer>
        <Svg height={height} width={width}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <Mark
              data={data}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              countValue={countValue}
              width={xScale.bandwidth()}
              height={yScale.bandwidth()}
              colorScale={colorScale}
            />
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


const Mark = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  countValue,
  width,
  height,
  colorScale,
}) => {
  const [tooltipVisible, setToolTipVisible] = useState(false);
  const [toolTipXLocation, setToolTipXLocation] = useState(0)
  const [toolTipYLocation, setToolTipYLocation] = useState(0)
  return (
    <>
    <g>
      {data.map((d) => (
        <g transform={`translate(${xScale(xValue(d))}, ${yScale(yValue(d))})`}>
          <rect
            height={height}
            width={width}
            fill={colorScale(countValue(d))}
            onMouseEnter={() => {
              setToolTipVisible(true)
              setToolTipXLocation(xScale(xValue(d)))
              setToolTipYLocation(yScale(yValue(d)))
            }}
            onMouseLeave={() => {setToolTipVisible(false)}}
          />
        </g>
      ))}
      {tooltipVisible && <ToolTip x={toolTipXLocation} y={toolTipYLocation} />}
      
      </g>
    </>
  );
};

const ToolTip = ({x, y}) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect height={100} width={100} fill={"white"} stroke="black" />
      <text x={35} y={50} fill="black" stroke="black">
        TEST
      </text>
    </g>
  );
};

//
