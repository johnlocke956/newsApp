import firebase from 'firebase';

import {
    LOGIN,
    LOGIN_S,
    LOGIN_F
} from './types';

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
        };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_S,
        payload: user
    });
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_F });
};
