import {
    LOGIN,
    LOGIN_S,
    LOGIN_F
} from '../actions/types';

const INITIAL_STATE = {
    user: null,
    error: 'PIPPO',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                error: '',
                loading: true
            };
        case LOGIN_S:
            return {
                ...state,
                ...INITIAL_STATE,
                user: action.payload,
                loading: true
            };
        case LOGIN_F:
            return {
                ...state,
                error: 'Authentication failed',
                loading: false
            };
        default:
            return state;
    }
};
