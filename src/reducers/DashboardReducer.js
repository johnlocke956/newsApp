import {
    FETCH_NEWS,
    CHOOSE_LANG
} from '../actions/types';

const INITIAL_STATE = {
    news: [],
    lang: 'it'
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                news: action.payload
            };
        case CHOOSE_LANG:
            return {
                ...state,
                lang: action.payload
            };
        default:
            return state;
    }
};
