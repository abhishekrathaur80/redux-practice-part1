import classes from "./Counter.module.css";
import { counterAction } from "../store";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const conter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const incrementByfive = () => {
    dispatch(counterAction.increase(5));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{conter}</div>}
      <div>
        <button onClick={incrementHandler}>Incrememnt</button>
        <button onClick={incrementByfive}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
