import { PERSISTED_SCOPE } from "@web/slices/persisted/constants";

import persistService from "../../../slices/persisted/index";

import { configureAppStore } from "./configureStore";

const rootServices = {
  [PERSISTED_SCOPE]: persistService,
};

const store = configureAppStore(rootServices, {
  blacklist: Object.keys(rootServices),
});

export default store;
