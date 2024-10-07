import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrementAction, incrementAction, initCouner, setCounter } from "./counterAction";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";

@Injectable()
export class CounterEffect{

    //this effect where other actions are dispatch and handle (listen) in reducer
    loadCounter=createEffect(()=>this.actions$.pipe(
        ofType(initCouner),
        switchMap(()=>{
            const storedCounter=localStorage.getItem('count');
            if(storedCounter){
                return of( setCounter({value:+storedCounter}))
            }
            return of(setCounter({value:0}))
        })
    ))


    // this is effect where none other actions are dispatch.
    saveCounter=createEffect(()=>this.actions$.pipe(
        ofType(incrementAction,decrementAction),
        withLatestFrom(this.store.select('counter')),
        tap((data)=>{
            console.log(data);
            localStorage.setItem('count',data[1].toString());
        })
    ),{dispatch:false})

    constructor(private actions$:Actions,private store:Store<{counter:number}>){}
}