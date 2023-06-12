import { CHAT_SCOPE } from "@web/pages/AI/constants";
import { ChatState } from "@web/pages/AI/types";
import { INFO_SCOPE } from "@web/pages/Info/constants";
import { InfoState } from "@web/pages/Info/types";
import { THEME_SCOPE } from "@web/providers/Theme/slice/constants";
import { IThemeState } from "@web/providers/Theme/slice/types";
import { PERSISTED_SCOPE } from "@web/slices/persisted/constants";
import { PersistedState } from "@web/slices/persisted/types";

export interface IRootState {
  normalKey: any;
  [PERSISTED_SCOPE]: PersistedState;
  [CHAT_SCOPE]: ChatState;
  [INFO_SCOPE]: InfoState;
  [THEME_SCOPE]: IThemeState;
}
