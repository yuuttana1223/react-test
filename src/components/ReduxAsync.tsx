import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchDummy,
  fetchUsername,
  selectValue,
} from "../features/customCounter/customCounterSlice";
import { useCallback } from "react";
import { selectUsername } from "../features/customCounter/customCounterSlice";

export const FETCH_DUMMY_MESSAGE = "FetchDummy";
export const FETCH_JSON_MESSAGE = "FetchJson";
export const COUNT = 5;
export const DATA_TEST_ID = "count-value";

export const ReduxAsync = () => {
  const value = useAppSelector(selectValue);
  const username = useAppSelector(selectUsername);
  const dispatch = useAppDispatch();

  const handleClickFetchDummy = useCallback(() => {
    dispatch(fetchDummy(COUNT));
  }, [dispatch]);

  const handleClickFetchUsername = useCallback(() => {
    dispatch(fetchUsername());
  }, [dispatch]);

  return (
    <div>
      <span data-testid={DATA_TEST_ID}>{value}</span>
      <button onClick={handleClickFetchDummy}>{FETCH_DUMMY_MESSAGE}</button>
      {username && <h3>{username}</h3>}
      <button onClick={handleClickFetchUsername}>{FETCH_JSON_MESSAGE}</button>
    </div>
  );
};
