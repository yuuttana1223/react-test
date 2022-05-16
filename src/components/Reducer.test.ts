import {
  customCounterReducer,
  increment,
  incrementByAmount,
} from "../features/customCounter/customCounterSlice";

const initialState = {
  mode: 0,
  value: 0,
  username: "",
};

describe("Reducer of ReduxToolKit", () => {
  describe("increment action", () => {
    // 各itが実行される前に実行される
    beforeAll(() => {
      initialState.mode = 0;
      initialState.value = 0;
    });

    it("Should increment by 1 with mode 0", () => {
      const action = {
        type: increment.type,
      };
      const state = customCounterReducer(initialState, action);
      expect(state.value).toEqual(1);
    });

    it("Should increment by 100 with mode 1", () => {
      initialState.mode = 1;
      const action = {
        type: increment.type,
      };
      const state = customCounterReducer(initialState, action);
      expect(state.value).toEqual(100);
    });

    it("Should increment by 10000 with mode 2", () => {
      initialState.mode = 2;
      const action = {
        type: increment.type,
      };
      const state = customCounterReducer(initialState, action);
      expect(state.value).toEqual(10000);
    });
  });
});

describe("incrementByAmount action", () => {
  beforeAll(() => {
    initialState.mode = 0;
    initialState.value = 0;
  });

  it("Should increment by payload value with mode 0", () => {
    const action = {
      type: incrementByAmount.type,
      payload: 3,
    };
    const state = customCounterReducer(initialState, action);
    expect(state.value).toEqual(3);
  });

  it("Should increment by 100 * payload value with mode 1", () => {
    initialState.mode = 1;
    const action = {
      type: incrementByAmount.type,
      payload: 3,
    };
    const state = customCounterReducer(initialState, action);
    expect(state.value).toEqual(300);
  });

  it("Should increment by 10000 * payload value with mode 2", () => {
    initialState.mode = 2;
    const action = {
      type: incrementByAmount.type,
      payload: 3,
    };
    const state = customCounterReducer(initialState, action);
    expect(state.value).toEqual(30000);
  });
});
