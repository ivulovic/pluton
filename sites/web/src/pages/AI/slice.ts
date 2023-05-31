import { PayloadAction, createSlice } from "@web/core";

import { CHAT_SCOPE, initialState } from "./constants";
import { Message } from "./types";

const slice = createSlice({
  name: CHAT_SCOPE,
  initialState,
  reducers: {
    prompt: (state, action: PayloadAction<Message>) => {
      state.loading = true;
      state.messages = [...state.messages, action.payload];
    },
    promptDone: (state, action: PayloadAction<Message>) => {
      state.loading = false;
      state.messages = [...state.messages, action.payload];
    },
  },
});

export const { actions, reducer } = slice;
