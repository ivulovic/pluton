import { createSlice, createPersistedSlice } from "@web/core";

const slice = createSlice({
  name: "persistedKey",
  initialState: { persisted: "persisted" },
  reducers: {
    hello: () => {},
  },
});

export default createPersistedSlice("persistedKey", slice.reducer);
