import { AppState } from "src/app/app.module";
import { LoginState } from "./login.reducer";

export const selectLogin = (state: AppState) => state.login;