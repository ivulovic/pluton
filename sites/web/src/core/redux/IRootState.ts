import { THEME_SCOPE } from "@web/providers/Theme/slice/constants";
import { IThemeState } from "@web/providers/Theme/slice/types";

export interface IRootState {
  normalKey: any;
  persistedKey: any;
  [THEME_SCOPE]: IThemeState;
}
