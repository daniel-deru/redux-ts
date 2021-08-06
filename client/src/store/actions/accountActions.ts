import { Dispatch } from "redux"
import { ActionType } from "../actionTypes"
import { Action } from "../../interfaces/storeInterfaces/accountInterface"



export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}

export const resetMoney = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.RESET
        })
    }
}