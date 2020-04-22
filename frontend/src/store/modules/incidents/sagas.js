import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import { newIncidentSuccess } from './actions';

function* newIncident({ payload }) {
  try {
    const { ongId, data } = payload;

    const response = yield call(api.post, 'incidents', data, {
      headers: { Authorization: ongId },
    });

    yield put(newIncidentSuccess(response.data));

    history.push('/profile');

    toast.success('Caso cadastrado com sucesso!');
  } catch (err) {
    toast.error('Falha na criação de cadastro, tente novamente.', {
      className: 'toast-background',
    });
  }
}

export default all([takeLatest('@incidents/CREATE_REQUEST', newIncident)]);