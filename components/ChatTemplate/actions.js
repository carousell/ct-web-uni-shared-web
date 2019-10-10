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


export const getTemplateMessage = ({ gatewayUrl, listId }) => {
  return {
    types: [GET_TEMPLATE_MESSAGE, GET_TEMPLATE_MESSAGE_SUCCESS, GET_TEMPLATE_MESSAGE_FAIL],
    promise: () =>
      fetch(`${gatewayUrl}/v2/public/chat/template/${listId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(data => data.json()).then(data => data).catch(error => console.log('error', error))
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
      }).then(data => data.json()).then(data => data).catch(err => { throw err})
  }
}