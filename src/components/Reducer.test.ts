import {
  customCounterReducer,
  increment,
  incrementByAmount,
} from "../features/customCounter/customCounterSlice";

let initialState = {
  mode: 0,
  value: 0,
  username: "",
};

// テストファイルの前後で一度だけ実行したいケース(beforeAll, afterAll)

// Jestは、テストファイル内の全てのdescribeをitの前に実行します。
// 各itの前後で実行される
beforeEach(() => {
  initialState = {
    mode: 0,
    value: 0,
    username: "",
  };
});

describe("Reducer of ReduxToolKit", () => {
  // describeメソッドの中でのみ実行したければここにbeforeEachなどを書く
  describe("increment action", () => {
    it("Should increment by 1 with mode 0", () => {
      const action = {
        type: increment.type,
      };
      const state = customCounterReducer(initialState, action);
      expect(state.value).toEqual(0 + 1);
    });

    it("Should increment by 100 with mode 1", () => {
      initialState.mode = 1;
      const action = {
        type: increment.type,
      };
      const state = customCounterReducer(initialState, action);
      expect(state.value).toEqual(0 + 100);
    });

    it("Should increment by 10000 with mode 2", () => {
      initialState.mode = 2;
      const action = {
        type: increment.type,
      };
      const state = customCounterReducer(initialState, action);
      expect(state.value).toEqual(0 + 10000);
    });
  });
});

describe("incrementByAmount action", () => {
  it("Should increment by payload value with mode 0", () => {
    const action = {
      type: incrementByAmount.type,
      payload: 3,
    };
    const state = customCounterReducer(initialState, action);
    expect(state.value).toEqual(0 + 3);
  });

  it("Should increment by 100 * payload value with mode 1", () => {
    initialState.mode = 1;
    const action = {
      type: incrementByAmount.type,
      payload: 3,
    };
    const state = customCounterReducer(initialState, action);
    expect(state.value).toEqual(0 + 3 * 100);
  });

  it("Should increment by 10000 * payload value with mode 2", () => {
    initialState.mode = 2;
    const action = {
      type: incrementByAmount.type,
      payload: 3,
    };
    const state = customCounterReducer(initialState, action);
    expect(state.value).toEqual(0 + 3 * 10000);
  });
});
