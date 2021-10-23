import { useState, useEffect } from "react";
import { useGetData, useGetTotals } from "./useGetData";
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
  TooltipRect,
  MarkRect
} from "./styles";

const margin = {
  top: 150,
  right: 150,
  bottom: 150,
  left: 150,
};

const height = 600;
const width = 600;

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

export const Chart = () => {

  return (
    <>
    <BoxChart />
    </>
  )
}

export const BoxChart = () => {
  const countData = useGetData();
  const totals = useGetTotals();

  if (!countData || !totals) {
    return null;
  }

  const filteredData = countData.filter(d => {
     const key = Object.getOwnPropertyNames(d)
     return d[key] >= 5
  })

  const array = range(Math.floor(Math.sqrt(filteredData.length)));
  const data = [];
  var num = 0;
  array.forEach((d, i) => {
    array.forEach((e, j) => {
      data.push({
        a: d,
        b: j,
        word: Object.getOwnPropertyNames(filteredData[num])[0],
        count: filteredData[num][Object.getOwnPropertyNames(filteredData[num])[0]],
      });
      num++;
    });
  });

  console.log(data);

  



  const xValue = (d) => d.a;
  const yValue = (d) => d.b;
  const countValue = (d) => d.count;
  const wordValue = (d) => d.word;

  const xScale = scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .paddingInner(0.1);

  console.log(xScale(5));

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([innerHeight, 0])
    .paddingInner(0.1);

  const colorScale = scaleLinear()
    .domain(extent(data, countValue))
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
              wordValue={wordValue}
              width={xScale.bandwidth()}
              height={yScale.bandwidth()}
              colorScale={colorScale}
            />
          </g>
        </Svg>
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
  wordValue,
}) => {
  const [tooltipVisible, setToolTipVisible] = useState(false);
  const [toolTipXLocation, setToolTipXLocation] = useState(0);
  const [toolTipYLocation, setToolTipYLocation] = useState(0);
  const [word, setWord] = useState("");
  const [count, setCount] = useState("");
  return (
    <>
      <g>
        {data.map((d) => (
          <g
            transform={`translate(${xScale(xValue(d))}, ${yScale(yValue(d))})`}
          >
            <MarkRect
              height={height}
              width={width}
              fill={colorScale(countValue(d))}
              onMouseEnter={() => {
                setToolTipVisible(true);
                setToolTipXLocation(xScale(xValue(d)));
                setToolTipYLocation(yScale(yValue(d)));
                setWord(wordValue(d));
                setCount(countValue(d));
              }}
              onMouseLeave={() => {
                setToolTipVisible(false);
              }}
              rx="5"
            />
          </g>
        ))}
        {tooltipVisible && (
          <ToolTip
            x={toolTipXLocation + 20}
            y={toolTipYLocation + 20}
            word={word}
            count={count}
          />
        )}
      </g>
    </>
  );
};

// const Rect = () => {
//   const [highlight, setHighlight] = useState(false);
//   return (
//     <g transform={`translate(${xScale(xValue(d))}, ${yScale(yValue(d))})`}>
//       <rect
//         height={height}
//         width={width}
//         fill={colorScale(countValue(d))}
//         stroke={hightlight && "black"}
//         onMouseEnter={() => setHighlight(true)}
//         onMouseLeave={() => setHighlight(false)}
//       />
//     </g>
//   );
// };

const tooltipHeight = 50;
const tooltipWidth = 100;
const ToolTip = ({ x, y, word, count }) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <TooltipRect height={tooltipHeight} width={tooltipWidth} fill={"white"} stroke="black" rx="5"/>
      <g
        transform={`translate(${tooltipWidth/2 - 5}, ${tooltipHeight / 2})`}
      >
      <text x={0} y={0} fill="black" stroke="black" style={{textAnchor: "middle"}}>
        {word}
      </text>
      <text x={10} y={15} fill="black" stroke="black" style={{textAnchor: "end"}}>
        {count}
      </text>
      </g>
    </g>
  );
};

//
