import { ActionReducerMap } from '@ngrx/store' // check your reducers match the state of your app or not
import { reducerStyles, interfaceStylesState } from './reducer-styles'

export interface AppState {
    reducerStyles: interfaceStylesState
}

export const reducers: ActionReducerMap<AppState> = { 
    reducerStyles
}