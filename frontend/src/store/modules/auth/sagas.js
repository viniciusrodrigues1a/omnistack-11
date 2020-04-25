import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess, signInFailure } from './actions';

function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, '/session', { id });

    const { name } = response.data;

    api.defaults.headers.Authorization = id;

    yield put(signInSuccess(name, id));

    history.push('/profile');
  } catch (err) {
    yield put(signInFailure());
    toast.error('Falha no login, tente novamente.', {
      className: 'toast-background',
    });
  }
}

function signOut() {
  history.push('/');
}

function setToken({ payload }) {
  if (!payload) return;

  const { id } = payload.auth;

  api.defaults.headers.Authorization = id;
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
