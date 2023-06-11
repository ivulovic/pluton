import { CHAT_SCOPE } from "@web/pages/AI/constants";
import { ChatState } from "@web/pages/AI/types";
import { OPEN_SOURCE_SCOPE } from "@web/pages/OpenSource/constants";
import { OpenSourceState } from "@web/pages/OpenSource/Info/types";
import { THEME_SCOPE } from "@web/providers/Theme/slice/constants";
import { IThemeState } from "@web/providers/Theme/slice/types";
import { PERSISTED_SCOPE } from "@web/slices/persisted/constants";
import { PersistedState } from "@web/slices/persisted/types";

export interface IRootState {
  normalKey: any;
  [PERSISTED_SCOPE]: PersistedState;
  [CHAT_SCOPE]: ChatState;
  [OPEN_SOURCE_SCOPE]: OpenSourceState;
  [THEME_SCOPE]: IThemeState;
}
