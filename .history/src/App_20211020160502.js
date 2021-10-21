import { useState } from "react";
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

const View = styled.div`
  width: 75%;
  padding: 1%;
`;

const Icon = styled(IoIosArrowForward)`
  position: absolute;
  bottom: 5%;
  right: 40%;
  font-size: 2em;
  transform: rotate(90deg);
  cursor: pointer;
  border: 1px solid black;
`;

const SingleView = styled.div``;

const height = window.innerHeight;

function App() {
  const [gridView, setGridView] = useState(false);
  return (
    <BodyContainer height={height}>
      <Hello />
      <Navbar />
      <View>
        {gridView ? (
          <ChartGrid>
            <Chart1 />
            <Chart2 />
            <Chart3 />
            <Chart4 />
            <Chart5 />
          </ChartGrid>
        ) : (
          <SingleView></SingleView>
        )}
      </View>
      <Icon onClick={() => setGridView((prev) => !prev)} />
    </BodyContainer>
  );
}

export default App;
