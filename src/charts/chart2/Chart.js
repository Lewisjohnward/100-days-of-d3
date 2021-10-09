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
  timeFormat
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

const height = 200;
const width = 300;

const AxisTickOffset = 5;
const xAxisLabelOffset = 30
const yAxisLabelOffset = 25

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const formatTime = timeFormat("%Y")

export const Chart = () => {
  const data = useGetData();

  if (!data) {
    return null;
  }

  const xValue = (d) => d.date;

  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice()

  const [start, stop] = xScale.domain();

  const binnedData = bin()
    .value(xValue)
    .domain(xScale.domain())
    .thresholds(timeMonths(start, stop))(data)
    .map((array) => {
      console.log(array);
      return {
        y: array.length,
        x0: array.x0,
        x1: array.x1,
      };
    });

  const yScale = scaleLinear()
    .domain([0, max(binnedData, (d) => d.y)])
    .range([innerHeight, 0])
    .nice();

  return (
    <Frame>
      <ChartContainer>
        <Svg height={height} width={width}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
          {xScale.ticks().map((tickValue) => (
            <g transform={`translate(${xScale(tickValue)}, 0)`}>
              <line y2={innerHeight} stroke="black" />
              <text
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
                {tickValue}
              </text>
            </g>
          ))}
          <text
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            style={{textAnchor: "middle"}}
          >Year</text>
          <text
            style={{textAnchor: "middle"}}
            transform={`translate(${-yAxisLabelOffset}, ${
              innerHeight / 2
            }) rotate(-90)`}
          >Number of lessons</text>
            {binnedData.map(({ x0, x1, y }) => (
              <Mark
                x={xScale(x0)}
                y={yScale(y)}
                width={xScale(x1) - xScale(x0)}
                height={innerHeight - yScale(y)}
              />
            ))}
          </g>
        </Svg>

        <Frame small={"true"}>
          <DescriptionContainer>
          <Description>Number of lessons done per month on Italki</Description>
            <Description>Cumulative Bar Chart on SVG With D3</Description>
            <Signature>09/10/21 - L Ward</Signature>
          </DescriptionContainer>
        </Frame>
      </ChartContainer>
    </Frame>
  );
};

const Mark = ({ x, y, width, height }) => {
  const [tooltipVisible, setToolTipVisible] = useState(false);

  return (
    <>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={"black"}
        onMouseEnter={() => setToolTipVisible(!tooltipVisible)}
        onMouseLeave={() => setToolTipVisible(!tooltipVisible)}
      />
      {tooltipVisible && (
        <rect x={x + 10} y={y - 25} height={50} width={50} rx={5} />
      )}
    </>
  );
};
