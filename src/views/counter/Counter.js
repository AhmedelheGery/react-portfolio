import { useState } from "react";
import Count from "../../components/counter/Count";
import CounterActions from "../../components/counter/CounterActions";
import './Counter.css'
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count > 0 && setCount(count - 1);
  };
  return (
    <section className="counter">
        <Count count={count} />
        <CounterActions increment={increment} decrement={decrement} />
    </section>

  );
};

export default Counter;
