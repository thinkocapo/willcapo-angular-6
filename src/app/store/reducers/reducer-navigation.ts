import { MODAL_CONTACT_ME } from '../actions/actions-navigation'

export interface interfaceNavigation { 
    modalContactMe: boolean
}

const INITIAL_STATE: interfaceNavigation = { 
    modalContactMe: false
}

export function reducerNavigation (state = INITIAL_STATE, action: any): interfaceNavigation {    
    const { payload, type } = action

    switch (type) {
        case MODAL_CONTACT_ME:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }

}