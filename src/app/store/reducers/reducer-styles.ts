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
    const { payload, type } = action

    switch (type) {
        case SET_COLOR_THEME:
            return {
                ...payload,
            }
        default:
            return state
    }

}