export function newIncidentRequest(ongId, data) {
  return {
    type: '@incidents/CREATE_REQUEST',
    payload: { ongId, data },
  };
}

export function newIncidentSuccess(data) {
  return {
    type: '@incidents/CREATE_SUCCESS',
    payload: { data },
  };
}
