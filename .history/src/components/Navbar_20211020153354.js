import { useState } from "react";
import styled from "styled-components";
import {TimerComponent as Timer} from "./Timer"
import { IoMdHelp } from "react-icons/io";

const NavContainer = styled.div`
  position: relative;
  height: 100%;
  width: 25%;
  background: white;
  padding: 25px 10px 25px 25px;

  > p {
    font-size: 0.9em;
  }
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: 700;
  text-align: center;
`;

const Icon = styled(IoMdHelp)`

`

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

export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <NavContainer visible={visible}>
    
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
  );
};
