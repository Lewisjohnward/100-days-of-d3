import styled from "styled-components";
import { Chart1 } from "./charts/Chart1";
import { Hello } from "./components/Hello";

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
  padding: 25px;
`;
const ChartGrid = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat(2, 200px);
  justify-content: center;
  align-items: start;
  align-content: start;
  grid-gap: 10px;
  border-left: 1px solid black;
  padding: 1%;
`;

const ChartContainer = styled.div``;

const height = window.innerHeight;

function App() {
  return (
    <BodyContainer height={height}>
      <Hello />
      <NavContainer>
        <p>d3.randomInt(1, 5)();</p>
        <p>d3.randomInt(6)();</p>
        <p>d3.range(5) - produces an array from 0 to value</p>
        <p>domain - takes the data range</p>
        <p>range - takes the graph dimension</p>
        </NavContainer>
      <ChartGrid>
        <Chart1 />
      </ChartGrid>
    </BodyContainer>
  );
}

export default App;
