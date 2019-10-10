import fetch from 'isomorphic-fetch';
import Cookies from 'js-cookie';

import {
  GET_TEMPLATE_MESSAGE,
  GET_TEMPLATE_MESSAGE_FAIL,
  GET_TEMPLATE_MESSAGE_SUCCESS,
  SEND_TEMPLATE_MESSAGE,
  SEND_TEMPLATE_MESSAGE_FAIL,
  SEND_TEMPLATE_MESSAGE_SUCCESS
} from './constants';

const handleResponse = async response => {
  try {
    const data = await response.json()
    if (!response.ok) {
      throw data.error
    }
    return data
  } catch (err) {
    throw err
  }

};

export const getTemplateMessage = ({ gatewayUrl, listId }) => {
  return {
    types: [GET_TEMPLATE_MESSAGE, GET_TEMPLATE_MESSAGE_SUCCESS, GET_TEMPLATE_MESSAGE_FAIL],
    promise: () =>
      fetch(`${gatewayUrl}/v2/public/chat/template/${listId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(data => data.json()).then(data => data)
  }
}

export const sendTemplateMessage = ({gatewayUrl, message, listId, accessToken}) => {
  const privateToken = accessToken ? accessToken : Cookies.get('privateToken');
  const bodyData = {
    product: {
      item_id: listId
    },
    message: {
      text: message
    }
  }
  return {
    types: [SEND_TEMPLATE_MESSAGE,SEND_TEMPLATE_MESSAGE_SUCCESS,SEND_TEMPLATE_MESSAGE_FAIL],
    promise: () =>
      fetch(`${gatewayUrl}/v2/public/chat/room/create`, {
        method: 'POST',
        headers: {
          'token': `${privateToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData)
      })
        .then(data => handleResponse(data))
        .catch(err => {
          throw err
        })
  }
}