import {
  GET_TEMPLATE_MESSAGE,
  GET_TEMPLATE_MESSAGE_FAIL,
  GET_TEMPLATE_MESSAGE_SUCCESS,
  SEND_TEMPLATE_MESSAGE,
  SEND_TEMPLATE_MESSAGE_FAIL,
  SEND_TEMPLATE_MESSAGE_SUCCESS
} from './constants';


const initialState = {
  loading: false,
  templateMessage: [],
  roomDetail: {
    partnerName: '',
    roomId: null
  },
  sendingMessage: false,
  sendSuccess: false,
  success: false
}
const parseRoomData = (data) => {
  return {
    partnerName: data.room_detail.seller.member_displayname,
    roomId: data._id
  }
}

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_TEMPLATE_MESSAGE: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_TEMPLATE_MESSAGE_SUCCESS: {
      const templateMessage =action.result.result.messages ? action.result.result.messages.slice(0,5) : [];
      return {
        ...state,
        loading: false,
        success: true,
        templateMessage
      }
    }
    case GET_TEMPLATE_MESSAGE_FAIL: {
      return {
        ...state,
        loading: false,
        success: false
      }
    }
    case SEND_TEMPLATE_MESSAGE: {
      return {
        ...state,
        sendingMessage: true
      }
    }
    case SEND_TEMPLATE_MESSAGE_SUCCESS: {
      console.log('run', action)
      const roomDetail = parseRoomData(action.result.result);
      return {
        ...state,
        roomDetail,
        sendSuccess: true,
        sendingMessage: false
      }
    }
    case SEND_TEMPLATE_MESSAGE_FAIL: {
      return {
        ...state,
        sendingMessage: false
      }
    }
    default: {
      return state
    }
  }
} 