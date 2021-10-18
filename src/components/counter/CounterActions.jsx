const CounterActions = ({increment,decrement}) => {
  return (
    <div className="btn-wrapper">
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>decrement -</button>
    </div>
  );
};

export default CounterActions;
