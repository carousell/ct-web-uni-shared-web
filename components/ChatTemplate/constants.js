const GET_TEMPLATE_MESSAGE = 'ChatTemplate/GET_TEMPLATE_MESSAGE'
const GET_TEMPLATE_MESSAGE_FAIL = 'ChatTemplate/GET_TEMPLATE_MESSAGE_FAIL'
const GET_TEMPLATE_MESSAGE_SUCCESS = 'ChatTemplate/GET_TEMPLATE_MESSAGE_SUCCESS'

const SEND_TEMPLATE_MESSAGE = 'ChatTemplate/SEND_TEMPLATE_MESSAGE'
const SEND_TEMPLATE_MESSAGE_FAIL = 'ChatTemplate/SEND_TEMPLATE_MESSAGE_FAIL'
const SEND_TEMPLATE_MESSAGE_SUCCESS = 'ChatTemplate/SEND_TEMPLATE_MESSAGE_SUCCESS'

const TRACK_TEMPLATE_MESSAGE = 'ChatTemplate/TRACK_TEMPLATE_MESSAGE'

export const trackingTemplateMessage = ({listId, message}) => {
  return {
    actionType: TRACK_TEMPLATE_MESSAGE,
    options: {
      click: {
        chapter1: 'c2c_chat',
        chapter2: 'chat_template',
        chapter3: message,
        name: `${listId}`,
        type: 'action',
      }
    }
  }
}

export {
  GET_TEMPLATE_MESSAGE,
  GET_TEMPLATE_MESSAGE_FAIL,
  GET_TEMPLATE_MESSAGE_SUCCESS,
  SEND_TEMPLATE_MESSAGE,
  SEND_TEMPLATE_MESSAGE_FAIL,
  SEND_TEMPLATE_MESSAGE_SUCCESS
}