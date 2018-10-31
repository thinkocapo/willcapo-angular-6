import { Injectable } from '@angular/core'
import { Store, combineReducers } from '@ngrx/store'

@Injectable({
    providedIn: 'root'
})

  
export class PaletteService {
    constructor(private store: Store<any>) {}

    generate(reducer: string) {
        
    }

}