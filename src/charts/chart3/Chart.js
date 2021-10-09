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
  format
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
  left: 50,
};

const height = 200;
const width = 300;

const AxisTickOffset = 5;
const xAxisLabelOffset = 25;
const yAxisLabelOffset = 35;

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const formatTime = timeFormat("%Y");

export const Chart = () => {
  const data = useGetData();

  if (!data) {
    return null;
  }

  console.log(data[30]);
  const xValue = (d) => d.date;
  const yValue = (d) => d.networth;

  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([innerHeight, 0])
    .nice();

  const fourPercentScale = scaleLinear()
  .domain([0, max(data, d => d.nw * 0.10)])
  .range([innerHeight, 0])
  .nice();

  const fourPercentData = data.map(({date, networth, basicexp, totalexp}) => {
    return ({
      date, 
      networth: networth * 0.04,
      networth5: networth * 0.05,
      networth6: networth * 0.06,
      basicexp: basicexp * 12,
      totalexp: totalexp * 12
    })
  })
  console.log(fourPercentData)

  return (
    <Frame>
      <ChartContainer>
        <Svg height={height} width={width}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {xScale.ticks(4).map((tickValue) => (
              <g transform={`translate(${xScale(tickValue)}, 0)`}>
                <text
                  dx="0.32em"
                  y={innerHeight + 3 * AxisTickOffset}
                  style={{ textAnchor: "middle" }}
                >
                  {formatTime(tickValue)}
                </text>
              </g>
            ))}

            {yScale.ticks().map((tickValue) => (
              <g transform={`translate(0, ${yScale(tickValue)})`}>
                <line x2={innerWidth} stroke="black" />
                <text
                  x={-AxisTickOffset}
                  dy="0.32em"
                  style={{ textAnchor: "end" }}
                >
                  {tickValue / 1000}
                </text>
              </g>
            ))}
            <text
              x={innerWidth / 2}
              y={innerHeight + xAxisLabelOffset}
              style={{ textAnchor: "middle" }}
            >
              Month
            </text>
            <text
              style={{ textAnchor: "middle" }}
              transform={`translate(${-yAxisLabelOffset}, ${
                innerHeight / 2
              }) rotate(-90)`}
            >
              Networth (£ 1000 )
            </text>
            {data.map(({ networth, date }) => (
              <Mark
              fill={"seagreen"}
                x={xScale(date)}
                y={yScale(networth)}
                width={4}
                height={innerHeight - yScale(networth)}
              />
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
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        
      />
      {tooltipVisible && (
        <rect x={x + 10} y={y - 25} height={50} width={50} rx={5} />
      )}
    </>
  );
};
