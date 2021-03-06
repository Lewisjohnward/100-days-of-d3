import { useState } from "react";
import { randomInt, range, scaleLinear, max } from "d3";
import {
  Frame,
  Svg,
  ChartContainer,
  Description,
  DescriptionContainer,
  Signature,
} from "./styles";

const data = range(10).map((d) => ({
  a: randomInt(10)(),
  b: d,
}));

const margin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30,
};

const height = 200;
const width = 300;

const AxisTickOffset = 7;

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

export const Chart = () => {
  const xValue = (d) => d.a;
  const yValue = (d) => d.b;

  const xAxisScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth])
    .nice();

  const yAxisScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([innerHeight, 0])
    .nice();

  return (
    <Frame>
      <ChartContainer>
        <Svg height={height} width={width}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {xAxisScale.ticks().map((tickValue) => (
              <g transform={`translate(${xAxisScale(tickValue)}, 0)`}>
                <line y2={innerHeight} stroke="black" />
                <text
                  y={innerHeight + 3 * AxisTickOffset}
                  style={{ textAnchor: "middle" }}
                >
                  {tickValue}
                </text>
              </g>
            ))}

            {yAxisScale.ticks().map((tickValue) => (
              <g transform={`translate(0, ${yAxisScale(tickValue)})`}>
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
            {data.map(({ a, b }) => (
              <Mark x={xAxisScale(a)} y={yAxisScale(b)} r={7} />
            ))}
          </g>
        </Svg>

        <Frame small={"true"}>
          <DescriptionContainer>
            <Description>Scatter graph on svg with D3</Description>
            <Signature>09/10/21 - L Ward</Signature>
          </DescriptionContainer>
        </Frame>
      </ChartContainer>
    </Frame>
  );
};

export const Chart1= () => {
  const xValue = (d) => d.a;
  const yValue = (d) => d.b;

  const xAxisScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth])
    .nice();

  const yAxisScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([innerHeight, 0])
    .nice();

  return (
        <Svg height={height} width={width}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {xAxisScale.ticks().map((tickValue) => (
              <g transform={`translate(${xAxisScale(tickValue)}, 0)`}>
                <line y2={innerHeight} stroke="black" />
                <text
                  y={innerHeight + 3 * AxisTickOffset}
                  style={{ textAnchor: "middle" }}
                >
                  {tickValue}
                </text>
              </g>
            ))}

            {yAxisScale.ticks().map((tickValue) => (
              <g transform={`translate(0, ${yAxisScale(tickValue)})`}>
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
            {data.map(({ a, b }) => (
              <Mark x={xAxisScale(a)} y={yAxisScale(b)} r={7} />
            ))}
          </g>
        </Svg>
  );
};

const Mark = ({ x, y, r }) => {
  const [tooltipVisible, setToolTipVisible] = useState(false);

  return (
    <>
    <circle
        cx={x}
        cy={y}
        r={r}
        fill={"black"}
        onMouseEnter={() => setToolTipVisible(!tooltipVisible)}
        onMouseLeave={() => setToolTipVisible(!tooltipVisible)}
      />
      {tooltipVisible && <rect x={x + 10} y={y - 25} height={50} width={50} rx={5} />}
      
    </>
  );
};

export const Test = () => {
  return (
    <Frame>
    <ChartContainer>
      <Chart1 />
    <Frame small={"true"}>
          <DescriptionContainer>
          <Description>Scatter graph on svg with D3</Description>
            <Signature>09/10/21 - L Ward</Signature>
          </DescriptionContainer>
        </Frame>
      </ChartContainer>
    </Frame>
  )


}
