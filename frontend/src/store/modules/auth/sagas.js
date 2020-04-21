import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
// import history from '../../../services/history';

import { signInSuccess, signInFailure } from './actions';

function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, '/sessions', { id });

    const { name } = response.data;

    yield put(signInSuccess(name));

    // history.push('/profile');
  } catch (err) {
    yield put(signInFailure());
    toast.error('Falha no login, tente novamente.', {
      className: 'toast-background',
    });
  }
}

function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
