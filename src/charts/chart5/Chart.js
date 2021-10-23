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
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const height = 900;
const width = 900;

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

export const Chart = () => {
  const countData = useGetData();

  if (!countData) {
    return null;
  }

  const array = range(Math.floor(Math.sqrt(countData.length)));
  const data = [];
  var num = 0;
  array.forEach((d, i) => {
    array.forEach((e, j) => {
      data.push({
        a: d,
        b: j,
        word: Object.getOwnPropertyNames(countData[num])[0],
        count: countData[num][Object.getOwnPropertyNames(countData[num])[0]],
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
    .paddingInner(0.2);

  console.log(xScale(5));

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([innerHeight, 0])
    .paddingInner(0.2);

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
            <rect
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

const ToolTip = ({ x, y, word, count }) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect height={100} width={100} fill={"white"} stroke="black" />
      <text x={35} y={30} fill="black" stroke="black">
        {word}
      </text>
      <text x={35} y={70} fill="black" stroke="black">
        {count}
      </text>
    </g>
  );
};

//
