import { ActionReducerMap } from '@ngrx/store' // check your reducers match the state of your app or not
import { reducerStyles, interfaceStylesState } from './reducer-styles'
import { reducerNavigation, interfaceNavigation } from './reducer-navigation'

export interface AppState {
    reducerNavigation: interfaceNavigation
    reducerStyles: interfaceStylesState
}

export const reducers: ActionReducerMap<AppState> = { 
    reducerNavigation,
    reducerStyles
}