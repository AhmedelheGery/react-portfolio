import { useState } from "react";
import Counter from "./views/Counter";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <div>
      <Counter count={count} increment={increment} decrement={decrement} />
    </div>
  );
}

export default App;
