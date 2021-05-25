import types from './types';

//create message
export const createMessage = msg => {
    console.log(msg)
    return {
        type: types.CREATE_MESSAGE,
        payload: msg
    }
}

//return errors
export const returnErrors = (msg, status) => {
    return {
        type: types.GET_ERRORS,
        payload: {msg, status}
    }
}