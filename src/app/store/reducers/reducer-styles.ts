import { SET_COLOR_THEME } from '../actions/actions-styles'

export interface interfaceStylesState { 
    footerColorText: string,
    footerColorBackground: string,

    navbarColorText: string,
    navbarColorBackground: string,

    cardColorBackground: string,
    cardColorText: string,

    siteColorBackground: string
}

const INITIAL_STATE: interfaceStylesState = { 
    footerColorText: "",
    footerColorBackground: "",
    navbarColorText: "",
    navbarColorBackground: "",
    cardColorBackground: "",
    cardColorText: "",
    siteColorBackground: ""
}

export function reducerStyles (state = INITIAL_STATE, action: any): interfaceStylesState {    
    switch (action.type) {
        case SET_COLOR_THEME:
            return {
                ...state,
                // ...
            }
        default:
            return state
    }
}