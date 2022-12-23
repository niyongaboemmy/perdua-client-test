import { combineReducers } from "redux";
import { Auth } from "../actions";
import { authReducer } from "./auth.reducer";

// define the entire state into the entire side
export interface StoreState {
  auth: Auth;
}

export const reducers = combineReducers<StoreState>({
  auth: authReducer,
});
