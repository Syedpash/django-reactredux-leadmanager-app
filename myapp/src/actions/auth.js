import axios from 'axios';
import { returnErrors } from './messages';
import types from './types';

// CHECK TOKEN  AND LOAD USER
export const loadUser = () => (dispatch, getState) => {
    //User Loading
    dispatch({ type: types.USER_LOADING });
    axios
        .get('/api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: types.USER_LOADED,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: types.AUTH_ERROR
            });
        })

}
// LOGIN USER
export const login = (username, password) => dispatch => {

    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, password });

    axios
        .post('/api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: types.LOGIN_FAIL
            });
        })

}

// REGISER
export const register = ({ username, password, email }) => dispatch => {

    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, email, password });

    axios
        .post('/api/auth/register', body, config)
        .then(res => {
            dispatch({
                type: types.REGISTER_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: types.REGISTER_FAIL
            });
        })

}
// LOGOUT USER

export const logout = () => (dispatch, getState) => {
    axios
        .post('/api/auth/logout', null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: types.LOGOUT_SUCCESS
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));

        })

}

export const tokenConfig = getState => {
    // Get token from state
    const token = getState().auth.token;

    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }
    return config;
}