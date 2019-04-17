import {
    LOGIN,
    REGISTER,
    LOGIN_S,
    LOGIN_F,
    LOGOUT
} from '../actions/types';

const INITIAL_STATE = {
    user: null,
    error: '',
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
        case REGISTER:
            return {
                ...state,
                error: 'Account registered',
                loading: false
            };
        case LOGIN_S:
            return {
                ...state,
                ...INITIAL_STATE,
                user: action.payload,
                error: 'LOGGED',
                loading: true
            };
        case LOGIN_F:
            return {
                ...state,
                error: 'Error',
                loading: false
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                error: '',
                loading: false
            };
        default:
            return state;
    }
};
