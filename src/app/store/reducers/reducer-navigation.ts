import { MODAL_CONTACT_ME, SET_CONTENT_TYPE } from '../actions/actions-navigation'

export interface interfaceNavigation { 
    modalContactMe: boolean,
    contentType: string, // TODO enum
}

const INITIAL_STATE: interfaceNavigation = { 
    modalContactMe: false,
    contentType: 'software'
}

export function reducerNavigation (state = INITIAL_STATE, action: any): interfaceNavigation {    
    const { payload, type } = action

    switch (type) {
        case MODAL_CONTACT_ME:
            return {
                ...state,
                ...payload,
            }
        case SET_CONTENT_TYPE:
            return {
                ...state,
                contentType: payload
            }
        default:
            return state
    }

}