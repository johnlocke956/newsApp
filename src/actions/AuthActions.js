import firebase from 'firebase';

import {
    LOGIN,
    REGISTER,
    LOGIN_S,
    LOGIN_F,
    LOGOUT
} from './types';

/* LOGIN */ 
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({ type: LOGIN });

            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => {
                    loginUserSuccess(dispatch, user);
                    resolve();
                })
                .catch(() => {
                    loginUserFail(dispatch);
                    reject();
                });
        });
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

/* LOGOUT */
export const logoutUser = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT });

        firebase.auth().signOut();
    };
};

/* REGISTRATION */
export const registerUser = ({ email, password }) => { /*
    return (dispatch) => {
        dispatch({ type: REGISTER });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
    };*/
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({ type: REGISTER });

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => {
                    loginUserSuccess(dispatch, user);
                    resolve();
                })
                .catch(() => {
                    loginUserFail(dispatch);
                    reject();
                });
        });
    };
};
