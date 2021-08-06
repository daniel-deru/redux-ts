import { Action } from "../../interfaces/storeInterfaces/accountInterface"
import { ActionType } from "../actionTypes"


const accountReduser = (state: number = 0, action: Action) => {
    switch (action.type){
        case ActionType.DEPOSIT:
            return state + action.payload
        case ActionType.WITHDRAW:
            return state - action.payload
        case ActionType.RESET:
            return 0
        default:
            return state
    }
}

export default accountReduser