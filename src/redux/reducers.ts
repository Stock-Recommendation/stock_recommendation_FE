import { combineReducers } from "redux";

import counter from "@redux/slices/counter";
import cmsSlice from "./slices/cmsSlice";

const rootReducer = combineReducers({ counter, cmsSlice });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
