import { useState } from "react";
import styled from "styled-components";
import { TimerComponent as Timer } from "./Timer";
import { IoIosArrowBack, IoMdHelp } from "react-icons/io";

const NavContainer = styled.div`
  position: absolute;
  z-index: 998;
  height: 100%;
  width: 400px;
  overflow: hidden;
  background: white;
  padding: 25px 10px 25px 25px;
  border-right: 1px solid black;
  > p {
    font-size: 0.9em;
  }

  &.open {
    transition: all 1s ease-in;
    transform: translateX(0px);
    position: absolute;
    z-index: 998;
  }
  &.close {
    transition: all 1s ease-in;
    transform: translateX(-100%);
    position: absolute;
    z-index: 998;
  }
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: 700;
  text-align: center;
`;

const Icon = styled(IoMdHelp)`
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 999;
  font-size: 1em;
  color: cornflowerblue;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.6);
`;
const CloseIcon = styled(IoIosArrowBack)`
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 999;
  font-size: 1em;
  color: cornflowerblue;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.6);
`;

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
  )})`;

const scaleBandCode = `
  d3.scaleBand()
  .domain("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").slice(0, domainCardinality))
  .range([40, 40 + rangeLength])
  .paddingInner(paddingInner)
  .paddingOuter(paddingOuter)
  .align(align)
  .round(enableRounding)
  `;

export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {visible ? (
        <CloseIcon onClick={() => setVisible((prev) => !prev)} />
      ) : (
        <Icon onClick={() => setVisible((prev) => !prev)} />
      )}
      <NavContainer className={visible ? "open" : "close"}>
        <Title>Cheatsheet</Title>
        <p>d3.randomInt(1, 5)()-Produces random int from 1 to 5</p>
        <p>d3.randomInt(6)() - Produces random into from 0 to 6</p>
        <p>d3.range(5) - produces an array from 0 to value</p>
        <p>domain - takes the data range</p>
        <p>range - takes the graph dimension and returns array</p>
        <pre>
          <code>{code}</code>
        </pre>
        <pre>
          <code>xScale.ticks(4).map</code>
        </pre>
        <pre>
          <code>const parseTime = d3.timeParse('%Y-%m-%d');</code>
        </pre>
        <Timer />
      </NavContainer>
      
    </>
  );
};
