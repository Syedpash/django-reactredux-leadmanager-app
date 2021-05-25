import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import types from './types';
import { tokenConfig } from './auth';

export const getLeads = () => (dispatch, getState) => {
    axios
        .get('api/leads/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: types.GET_LEADS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteLead = id => (dispatch, getState) => {
    axios
        .delete(`api/leads/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ leadDeleted: "Lead Deleted" }))
            dispatch({
                type: types.DELETE_LEAD,
                payload: id
            });

        })
        .catch(err => console.log(err));
};

export const addLead = lead => (dispatch, getState) => {
    axios
        .post('api/leads/', lead, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ leadAdded: 'Lead Added' }));
            dispatch({
                type: types.ADD_LEAD,
                lead: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};