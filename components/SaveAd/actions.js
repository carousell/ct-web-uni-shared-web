import fetch from 'isomorphic-fetch';
import Cookies from 'js-cookie';

import {
  GET_SAVE_AD,
  GET_SAVE_AD_SUCCESS,
  GET_SAVE_AD_FAIL,
  SAVE_AD,
  SAVE_AD_SUCCESS,
  SAVE_AD_FAIL,
  UNSAVE_AD,
  UNSAVE_AD_SUCCESS,
  UNSAVE_AD_FAIL,
  RESET_MESSAGE,
} from './constants';

export function getSaveAd({ gatewayUrl, accessToken }) {
  let privateToken = Cookies.get('privateToken');
  if (accessToken) {
    privateToken = accessToken;
  }

  return {
    types: [GET_SAVE_AD, GET_SAVE_AD_SUCCESS, GET_SAVE_AD_FAIL],
    promise: () =>
      fetch(`${gatewayUrl}/v1/private/saved-ad`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${privateToken}` },
      })
        .then(data => data.json())
        .then(data => data),
  };
}

export function saveAd({ listId, gatewayUrl }) {
  const privateToken = Cookies.get('privateToken');
  return {
    types: [SAVE_AD, SAVE_AD_SUCCESS, SAVE_AD_FAIL],
    payload: { listId },
    promise: () =>
      fetch(`${gatewayUrl}/v1/private/saved-ad`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${privateToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ list_id: listId }),
      })
        .then(data => data.json())
        .then(data => data),
  };
}

export function unsaveAd({ listId, gatewayUrl }) {
  const privateToken = Cookies.get('privateToken');
  return {
    types: [UNSAVE_AD, UNSAVE_AD_SUCCESS, UNSAVE_AD_FAIL],
    payload: { listId },
    promise: () =>
      fetch(`${gatewayUrl}/v1/private/saved-ad/ad/${listId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${privateToken}`,
          'Content-Type': 'application/json',
        },
      })
        .then(data => data.json())
        .then(data => data),
  };
}

export function resetMessage() {
  return {
    type: RESET_MESSAGE,
  };
}
