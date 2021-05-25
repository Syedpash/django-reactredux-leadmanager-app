import types from '../actions/types';

const initialState = {}

export default function(state = initialState, action) {
    switch(action.type) {
        
        case types.GET_MESSAGES:
            return action.payload;

        case types.CREATE_MESSAGE:
            return (state = action.payload);

        default: 
            return state;
    }
}