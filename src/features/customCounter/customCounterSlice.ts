import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchUser } from "../../hooks/useUser";

export type CustomCounterState = {
  mode: number;
  value: number;
  username: string;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchDummy = createAsyncThunk(
  "dummy/fetch",
  async (num: number) => {
    await sleep(2000);
    return num;
  }
);

export const fetchUsername = createAsyncThunk("user/fetch", async () => {
  const { username } = await fetchUser();
  return username;
});

const initialState: CustomCounterState = {
  mode: 0,
  value: 0,
  username: "",
};

export const customCounterSlice = createSlice({
  name: "customCounter",
  initialState,
  reducers: {
    increment: (state: CustomCounterState) => {
      switch (state.mode) {
        case 0:
          state.value += 1;
          break;
        case 1:
          state.value += 100;
          break;
        case 2:
          state.value += 10000;
          break;
        default:
          break;
      }
    },
    incrementByAmount: (
      state: CustomCounterState,
      action: PayloadAction<number>
    ) => {
      switch (state.mode) {
        case 0:
          state.value += action.payload;
          break;
        case 1:
          state.value += action.payload * 100;
          break;
        case 2:
          state.value += action.payload * 10000;
          break;
        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDummy.fulfilled, (state, action) => {
      state.value = 100 + action.payload;
    });
    builder.addCase(fetchDummy.rejected, (state, action) => {
      // unknown型になるので型変える
      if (typeof action.payload === "number") {
        state.value = 100 - action.payload;
      }
    });
    builder.addCase(fetchUsername.fulfilled, (state, action) => {
      state.username = action.payload;
    });
  },
});

export const { increment, incrementByAmount } = customCounterSlice.actions;

export const selectValue = (state: RootState) => state.customCounter.value;
export const selectUsername = (state: RootState) =>
  state.customCounter.username;

export const customCounterReducer = customCounterSlice.reducer;
