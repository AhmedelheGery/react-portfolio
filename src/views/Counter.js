import Count from "../components/counter/Count"
import CounterActions from "../components/counter/CounterActions"

const Counter = ({count,increment,decrement}) => {
    return (
        <>
        <Count count={count} />
        <CounterActions increment={increment} decrement={decrement} />
        </>
            
    )
}

export default Counter
