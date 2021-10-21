import styled from "styled-components";
import {Chart1, Chart2, Chart3, Chart4, Chart5}  from "./charts/index.js";
import { Hello } from "./components/HelloD3";

const BodyContainer = styled.div`
  position: relative;
  z-index: 99;
  display: flex;
  height: ${({ height }) => height}px;
  overflow: hidden;
`;

const NavContainer = styled.div`
  height: 100%;
  width: 25%;
  background: white;
  padding: 25px 10px 25px 25px;

  > p {
    font-size: 0.9em;
  }
`;
const ChartGrid = styled.div`
  width: 75%;
  display: grid;
  overflow: scroll;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(2, 400px);
  justify-content: center;
  align-items: start;
  align-content: start;
  grid-gap: 0px;
  border-left: 1px solid black;
  padding: 1%;
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: 700;
  text-align: center;
`

const height = window.innerHeight;
const code = `const binnedData = bin()
.value(xValue)
.domain(xScale.domain())
.thresholds(timeMonths(start, stop))(data)
.map(array => {
  console.log(array)
  return (
    { 
    y: array.length, 
    x0: array.x0, 
    x1: array.x1
  }
  )})`
function App() {
  return (
    <BodyContainer height={height}>
      <Hello />
      <NavContainer>
        <Title>Cheatsheet</Title>
        <p>d3.randomInt(1, 5)()-Produces random int from 1 to 5</p>
        <p>d3.randomInt(6)() - Produces random into from 0 to 6</p>
        <p>d3.range(5) - produces an array from 0 to value</p>
        <p>domain - takes the data range</p>
        <p>range - takes the graph dimension and returns array</p>
        <pre><code>{code}</code></pre>
        <pre><code>xScale.ticks(4).map</code></pre>
        <pre><code>const parseTime = d3.timeParse('%Y-%m-%d');</code></pre>
        </NavContainer>
      <ChartGrid>
        <Chart1 />
        <Chart2 />
        <Chart2 />
        <Chart3/>
        <Chart4 />
        <Chart5 />
      </ChartGrid>
    </BodyContainer>
  );
}

export default App;
