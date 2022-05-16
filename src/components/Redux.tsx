import { useState, useCallback, ChangeEvent } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectValue,
} from "../features/customCounter/customCounterSlice";
export const Redux = () => {
  const [num, setNum] = useState(0);
  const count = useAppSelector(selectValue);
  const dispatch = useAppDispatch();

  const handleIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const handleIncrementByAmount = useCallback(() => {
    dispatch(incrementByAmount(num));
  }, [dispatch, num]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNum(Number(e.target.value));
  }, []);

  return (
    <div>
      <h3>Redux Integration Test</h3>
      <div>
        <button onClick={handleIncrement}>+</button>
        <span data-testid="count">{count}</span>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrementByAmount}>IncrementByAmount</button>
        <input
          type="number"
          placeholder="Enter"
          value={num}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
