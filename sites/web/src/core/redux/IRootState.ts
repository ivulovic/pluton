import { THEME_SCOPE } from "@web/providers/Theme/slice/constants";
import { IThemeState } from "@web/providers/Theme/slice/types";
import { PERSISTED_SCOPE } from "@web/slices/persisted/constants";
import { PersistedState } from "@web/slices/persisted/types";

export interface IRootState {
  normalKey: any;
  [PERSISTED_SCOPE]: PersistedState;
  [THEME_SCOPE]: IThemeState;
}
