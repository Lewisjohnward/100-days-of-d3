import { randomInt, range, scaleLinear, max } from "d3";

const data = range(10).map((d) => ({
  a: randomInt(10)(),
  b: d,
}));

const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};

const height = 200;
const width = 300;

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;
console.log(data)
export const Chart1 = () => {

  const xValue = (d) => d.a;
  const yValue = (d) => d.b;

  const xAxisScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth])
    .nice()

  const yAxisScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([0, innerHeight])
    .nice()

    console.log(yAxisScale(4))
  return (
    <div className="chartcontainer">
      <svg height={height} width={width}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
            {data.map(({a, b}) => (
                <circle 
                    cx={xAxisScale(a)}
                    cy={yAxisScale(b)}
                    fill="black"
                    r={5}
                />
            ))}
            
        </g>
      </svg>
    </div>
  );
};
