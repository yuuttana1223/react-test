import {
  customCounterReducer,
  fetchDummy,
} from "../features/customCounter/customCounterSlice";
const initialState = {
  mode: 0,
  value: 0,
  username: "",
};

describe("extraReducers", () => {
  beforeAll(() => {
    initialState.mode = 0;
    initialState.value = 0;
  });

  it("Should output 100 + payload when fulfilled", () => {
    const action = {
      type: fetchDummy.fulfilled.type,
      payload: 3,
    };
    const state = customCounterReducer(initialState, action);
    expect(state.value).toEqual(100 + 3);
  });

  it("Should output 100 - payload when rejected", () => {
    const action = {
      type: fetchDummy.rejected.type,
      payload: 3,
    };
    const state = customCounterReducer(initialState, action);
    expect(state.value).toEqual(100 - 3);
  });
});
