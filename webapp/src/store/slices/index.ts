import { combineReducers } from "redux"
import example from "./example"

const reducer = combineReducers({ example })

export default reducer
export type RootState = ReturnType<typeof reducer>
