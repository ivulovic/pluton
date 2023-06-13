import { PayloadAction, createSlice } from "@web/core";

import { APPS_SCOPE, initialState } from "./constants";

const slice = createSlice({
  name: APPS_SCOPE,
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
