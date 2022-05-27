import { useCounter } from "../hooks/useCounter";

export const INITIAL_COUNT = 3;
export const INCREMENT_TEXT = "Increment";
export const DECREMENT_TEXT = "Decrement";
export const DOUBLE_TEXT = "Double";
export const TRIPLE_TEXT = "Triple";
export const RESET_TEXT = "Reset";

export const CustomHooks = () => {
  const { count, increment, decrement, double, triple, reset } =
    useCounter(INITIAL_COUNT);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>{INCREMENT_TEXT}</button>
      <button onClick={decrement}>{DECREMENT_TEXT}</button>
      <button onClick={double}>{DOUBLE_TEXT}</button>
      <button onClick={triple}>{TRIPLE_TEXT}</button>
      <button onClick={reset}>{RESET_TEXT}</button>
    </div>
  );
};
