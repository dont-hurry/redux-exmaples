import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const value = useSelector((state) => state.value);
  const isVisible = useSelector((state) => state.isVisible);

  const dispatch = useDispatch();

  // `counterActions.increment()` returns an action object whose `type` property
  // value is an automatically generated identifier
  const handleIncrement = () => dispatch(counterActions.increment());

  const handleDecrement = () => dispatch(counterActions.decrement());

  const handleAddTen = () => dispatch(counterActions.addNumber(10));

  const handleToggleVisibility = () =>
    dispatch(counterActions.toggleVisibility());

  return (
    <div>
      {isVisible && <div>{value}</div>}
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleAddTen}>+10</button>
        <button onClick={handleToggleVisibility}>Toggle Visibility</button>
      </div>
    </div>
  );
};

export default Counter;
