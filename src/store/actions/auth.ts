import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
export const authSuccess = (token: any) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};
export const authFail = (error: any) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

const checkAuthTimeOut = (expirationTime: any) => {
  return (dispatch: (arg0: { type: string }) => void) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authLogin = (email: any, password: any) => {
  return (dispatch: any) => {
    dispatch(authStart());
    axios
      .post('http://127.0.0.1:8000/dj-rest-auth/login/', {
        email: email,
        password: password,
      })
      .then((res) => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 4200 * 1000);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', JSON.stringify(expirationDate));
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeOut(4200));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};
export const authSignup = (email: any, password1: any, password2: any) => {
  return (dispatch: any) => {
    dispatch(authStart());
    axios
      .post('http://127.0.0.1:8000/dj-rest-auth/login/', {
        email: email,
        password1: password1,
        password2: password2,
      })
      .then((res) => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 4200 * 1000);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', JSON.stringify(expirationDate));
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeOut(4200));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authCheckState = () => {
  return (dispatch: any) => {
    const token = localStorage.getItem('token');
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(
        JSON.parse(
          localStorage.getItem('expirationDate') || JSON.stringify(new Date())
        )
      );
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkAuthTimeOut(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
