import types from '../actions/types';
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.USER_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case types.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }

        case types.LOGIN_SUCCESS:
        case types.REGISTER_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case types.AUTH_ERROR:
        case types.LOGIN_FAIL:
        case types.LOGOUT_SUCCESS:
        case types.REGISTER_FAIL:
            console.log("sdfsfsfsfsfsdsdsdf")
            localStorage.removeItem('token');
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                token: null,
                user: null

            }
        default:
            return state;
    }
}