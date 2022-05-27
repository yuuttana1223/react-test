import { act, renderHook } from "@testing-library/react";
import { INITIAL_COUNT } from "../components/CustomHooks";
import { useCounter } from "./useCounter";

describe("useCounter custom hook", () => {
  it("Should increment by 1", () => {
    const { result } = renderHook(() => useCounter(INITIAL_COUNT));
    // toEqual()はオブジェクト比較できる numberとstringも一応行ける
    expect(result.current.count).toBe(INITIAL_COUNT);
    // act()はhook内でのstateの変更を実行する 副作用があるときだけ仕様
    // useEffectのイメージ?
    act(() => result.current.increment());
    expect(result.current.count).toBe(INITIAL_COUNT + 1);
  });

  it("Should decrement by 1", () => {
    const { result } = renderHook(() => useCounter(INITIAL_COUNT));
    expect(result.current.count).toBe(INITIAL_COUNT);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(INITIAL_COUNT - 1);
  });

  it("Should double the counter value", () => {
    const { result } = renderHook(() => useCounter(INITIAL_COUNT));
    expect(result.current.count).toBe(INITIAL_COUNT);
    act(() => result.current.double());
    expect(result.current.count).toBe(INITIAL_COUNT * 2);
  });

  it("Should triple the counter value", () => {
    const { result } = renderHook(() => useCounter(INITIAL_COUNT));
    expect(result.current.count).toBe(INITIAL_COUNT);
    act(() => result.current.triple());
    expect(result.current.count).toBe(INITIAL_COUNT * 3);
  });

  it("Should reset to zero", () => {
    const { result } = renderHook(() => useCounter(INITIAL_COUNT));
    expect(result.current.count).toBe(INITIAL_COUNT);
    act(() => result.current.reset());
    expect(result.current.count).toBe(0);
  });
});
