export const Navbar = () => {
  return (
    <NavContainer>
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
    </NavContainer>
  );
};
