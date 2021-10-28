// `useSelector` allows us to select a part of the state managed by the store
// There's also a `useStore` Hook
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  // `useSelector` accepts a function to determine which piece of data to
  // extract from the store
  const value = useSelector((state) => state.value);
  const isVisible = useSelector((state) => state.isVisible);

  // With `useSelector`, React Redux automatically sets up a subscription to the
  // Redux store for this component

  // If the component unmounts, React Redux would automatically clear this
  // subscription

  const dispatch = useDispatch(); // Returns a dispatch function

  const handleIncrement = () => dispatch({ type: "INCREMENT" });

  const handleDecrement = () => dispatch({ type: "DECREMENT" });

  const handleToggleVisibility = () => dispatch({ type: "TOGGLE_VISIBILITY" });

  return (
    <div>
      {isVisible && <div>{value}</div>}
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleToggleVisibility}>Toggle Visibility</button>
      </div>
    </div>
  );
};

export default Counter;
