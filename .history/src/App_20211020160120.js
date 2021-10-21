import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { Chart1, Chart2, Chart3, Chart4, Chart5 } from "./charts/index.js";
import { Hello } from "./components/HelloD3";
import { Navbar } from "./components/Navbar.js";

const BodyContainer = styled.div`
  position: relative;
  z-index: 99;
  display: flex;
  height: ${({ height }) => height}px;
  overflow: hidden;
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
  padding: 1%;
`;

const Icon = styled(IoIosArrowForward)`
  position: absolute;
  bottom: 10%;
  right: 30%;
  font-size: 2em;
  transform: rotate(90deg);
`



const height = window.innerHeight;

function App() {
  return (
    <BodyContainer height={height}>
      <Hello />
      <Navbar />
      <ChartGrid>
        <Chart1 />
        <Chart2 />
        <Chart3 />
        <Chart4 />
        <Chart5 />
      </ChartGrid>
      <Icon />
    </BodyContainer>
  );
}

export default App;
