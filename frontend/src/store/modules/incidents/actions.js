export function newIncidentRequest(data) {
  return {
    type: '@incidents/CREATE_REQUEST',
    payload: { data },
  };
}

export function newIncidentSuccess(data) {
  return {
    type: '@incidents/CREATE_SUCCESS',
    payload: { data },
  };
}

export function deleteIncidentRequest(id) {
  return {
    type: '@incidents/DELETE_REQUEST',
    payload: { id },
  };
}

export function updateIncidentRequest(id, data) {
  return {
    type: '@incidents/UPDATE_REQUEST',
    payload: { id, data },
  };
}
