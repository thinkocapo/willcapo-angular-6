import { Injectable } from '@angular/core'
import { Store, combineReducers } from '@ngrx/store'

@Injectable({
    providedIn: 'root'
})

  
export class PaletteService {
    constructor(private store: Store<any>) {}

    generate(reducer: string) {
        return p1 || p2
    }

}

const p1 = [
    '604439',
    '9e9a75',
    '1c222e',
    '41533b',
    '554840'
]
const p2 = [
    '002500',
    '502500',
    '505000',
    '000000',
    'aa8060' 
]
// LEGEND - 5 COLORS
// nav, footer background
// nav text, footer text,
// card background
// card text
// site background