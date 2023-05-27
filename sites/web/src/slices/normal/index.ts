import { createSlice } from "@web/core";

const slice = createSlice({
  name: "normalKey",
  initialState: { normal: "normal" },
  reducers: {
    hello: () => {},
  },
});

export const { actions, reducer } = slice;
