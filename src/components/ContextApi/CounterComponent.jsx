
import { useCounter } from "./CounterContex/CounterProvider";
import CounterControls from "./CounterControls";

const CounterComponent = () => {
  const { count, step } = useCounter();

  return (
    <div>
      Current Step Value is Set to :{step}
      <CounterControls />
      <h1>Current Count Value:{count}</h1>
    </div>
  );
};

export default CounterComponent;
