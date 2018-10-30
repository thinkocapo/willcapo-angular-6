import { Injectable } from '@angular/core'
import { Store, combineReducers } from '@ngrx/store'

@Injectable({
    providedIn: 'root'
})

  
export class ReduxService {
    constructor(private store: Store<any>) {}

    connect(reducer: string): Function {
        const self = this
        return function (onStoreUpdateHandler: any) {
            return self.store.select(reducer).subscribe(onStoreUpdateHandler)
            // return self.store.select(reducer).subscribe(onStoreUpdateHandler).map(() => {})
        }
    }

    // TODO
    // Add in a type check - 3rd param saying what <string> <Project> etc. and then check to make sure arg is instanceof that type?
    action (actionType: string, payload: any): void {
        this.store.dispatch({ type: actionType, payload })
    }

}