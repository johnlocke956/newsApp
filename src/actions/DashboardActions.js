import {
    FETCH_NEWS,
    CHOOSE_LANG
} from './types';

/* FETCH DATA */ 
export const fetchNews = () => {
    return (dispatch, getState) => {
        const { lang } = getState().dashboard; // oppure passando lang in HomePage
        fetch(`https://newsapi.org/v2/top-headlines?country=${lang}&category=technology&apiKey=9a48797b91184b4681b2b617d3213e62`)
            .then(r => r.json())
            .then(rData => 
                dispatch({ type: FETCH_NEWS, payload: rData.articles })
            );
    };
};

/* CHANGE LANGUAGE */
export const changeLang = (lang) => {
    return (dispatch) => {
        dispatch({
            type: CHOOSE_LANG,
            payload: lang,
        });
    };
};
