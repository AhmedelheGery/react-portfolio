import { useState } from "react";
import Count from "../components/counter/Count";
import CounterActions from "../components/counter/CounterActions";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count > 0 && setCount(count - 1);
  };
  return (
    <>
      <Count count={count} />
      <CounterActions increment={increment} decrement={decrement} />
    </>
  );
};

export default Counter;
