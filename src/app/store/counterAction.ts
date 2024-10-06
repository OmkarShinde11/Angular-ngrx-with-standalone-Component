import { createAction, props } from "@ngrx/store";


export let incrementAction=createAction(
    '[counter] Increment',
    props<{value:number}>(),
)

export let decrementAction=createAction(
    '[counter] Decrement',
    props<{value:number}>()
)

export let initCouner=createAction(
    '[Counter] init',
)

export let setCounter=createAction(
    '[Counter] set',
    props<{value:number}>(),
)