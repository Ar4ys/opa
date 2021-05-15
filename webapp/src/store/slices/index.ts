import { combineReducers } from "redux"
import user from "./user"

const reducer = combineReducers({ user })

export default reducer
export type RootState = ReturnType<typeof reducer>
