import { AuthState } from "../../auth/store/interfaces/auth-state";
import { ThemeState } from "../../theming/store/state-management/interfaces/theme-state";

export interface AppState {
    auth: AuthState,
    theme: ThemeState
}