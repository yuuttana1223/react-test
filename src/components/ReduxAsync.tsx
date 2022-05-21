import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchDummy,
  selectValue,
} from "../features/customCounter/customCounterSlice";
import { useCallback } from "react";

export const FETCH_DUMMY_MESSAGE = "FetchDummy";
export const COUNT = 5;
export const DATA_TEST_ID = "count-value";

export const ReduxAsync = () => {
  const value = useAppSelector(selectValue);
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(fetchDummy(COUNT));
  }, [dispatch]);

  return (
    <div>
      <span data-testid={DATA_TEST_ID}>{value}</span>
      <button onClick={handleClick}>{FETCH_DUMMY_MESSAGE}</button>
    </div>
  );
};
