import { combineReducers } from "redux";
import accountReduser from "./accountReduser";

const redusers = combineReducers({
    account: accountReduser
})

export default redusers

export type State = ReturnType<typeof redusers>