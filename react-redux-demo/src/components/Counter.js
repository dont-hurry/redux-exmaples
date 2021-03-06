// `useSelector` allows us to select a part of the state managed by the store
// There's also a `useStore` Hook
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  // `useSelector` accepts a function to determine which piece of data to
  // extract from the store
  const { value, isVisible } = useSelector((state) => state.counter);

  // With `useSelector`, React Redux automatically sets up a subscription to the
  // Redux store for this component

  // If the component unmounts, React Redux would automatically clear this
  // subscription

  const dispatch = useDispatch(); // Returns a dispatch function

  const handleIncrement = () => dispatch({ type: "COUNTER/INCREMENT" });

  const handleDecrement = () => dispatch({ type: "COUNTER/DECREMENT" });

  const handleAddTen = () =>
    dispatch({ type: "COUNTER/ADD_NUMBER", payload: 10 });

  const handleToggleVisibility = () =>
    dispatch({ type: "COUNTER/TOGGLE_VISIBILITY" });

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
