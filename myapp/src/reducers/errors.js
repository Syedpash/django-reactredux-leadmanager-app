import types from '../actions/types';

const initialState = {}

export default function(state = initialState, action) {
    switch(action.type) {
        case types.GET_ERRORS:

            return {
                msg: action.payload.msg,
                status: action.payload.status
            }

        default: 
            return state;
    }
}