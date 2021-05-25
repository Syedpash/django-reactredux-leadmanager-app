import types from '../actions/types';

const initialState = {
    leads: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case types.GET_LEADS:
            return {
                ...state,
                leads:action.payload
            }

        case types.DELETE_LEAD:
            return {
                ...state,
                leads: state.leads.filter(lead => lead.id !== action.payload)
            }
        
            case types.ADD_LEAD:
                return {
                    ...state,
                    leads: [...state.leads, action.lead]
                }
        default:
            return state;
    }
}