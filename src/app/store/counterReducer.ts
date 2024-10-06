import { createReducer, on } from "@ngrx/store";
import { decrementAction, incrementAction, setCounter } from "./counterAction";

let initialState=0;

export let counterReducer=createReducer(
    initialState,on(incrementAction,(state)=>state +2),on(decrementAction,(state)=>state -1),on(setCounter,(state,payload)=>state=payload.value)
)


// export function counterReducer(state=initialState){
//     return state
// }