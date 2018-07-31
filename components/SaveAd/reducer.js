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

const initialState = {
  success: false,
  activeAds: {},
  message: '',
  fetching: false,
  count: 0,
  data: [],
  limitAds: 50,
};

const POST_SAVE_AD_ACTIONS = {
  success: res => {
    const { state, action: { payload: { listId }, result: { status, message } } } = res;

    const activeAds = {
      ...state.activeAds,
      [listId]: true,
    };

    return {
      success: status === 'success' ? true : false,
      count: state.count + 1,
      message,
      activeAds,
    };
  },
  failed: res => {
    const { result: { message } } = res.action;
    return {
      success: false,
      message,
    };
  },
};

const DELETE_SAVE_AD_ACTIONS = {
  success: res => {
    const { state, action: { payload: { listId }, result: { status, message } } } = res;
    const activeAds = {
      ...state.activeAds,
    };

    if (activeAds[listId]) {
      delete activeAds[listId];
    }

    return {
      success: status === 'success' ? true : false,
      count: state.count - 1,
      message,
      activeAds,
    };
  },
  failed: res => {
    const { result: { message } } = res.action;
    return {
      success: false,
      message,
    };
  },
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_SAVE_AD: {
      return {
        ...state,
        activeAds: {},
        fetching: true,
      };
    }
    case GET_SAVE_AD_SUCCESS: {
      let { ads = [], limit } = action.result;
      const activeAds = {};

      if (!ads) {
        ads = [];
      }

      ads.forEach(item => {
        activeAds[item.list_id] = true;
      });

      return {
        ...state,
        activeAds,
        fetching: false,
        success: true,
        data: ads,
        count: ads.length,
        limitAds: limit,
      };
    }
    case GET_SAVE_AD_FAIL: {
      return {
        ...state,
        activeAds: {},
        fetching: false,
        success: false,
      };
    }
    case SAVE_AD: {
      return state;
    }
    case SAVE_AD_SUCCESS: {
      const { status } = action.result;
      const data = POST_SAVE_AD_ACTIONS[status]({ action, state });
      return {
        ...state,
        ...data,
      };
    }
    case SAVE_AD_FAIL: {
      return {
        ...state,
        success: false,
      };
    }
    case UNSAVE_AD: {
      return state;
    }
    case UNSAVE_AD_SUCCESS: {
      const { status } = action.result;
      const data = DELETE_SAVE_AD_ACTIONS[status]({ action, state });

      return {
        ...state,
        ...data,
      };
    }
    case UNSAVE_AD_FAIL: {
      return {
        ...state,
        success: false,
      };
    }
    case RESET_MESSAGE: {
      return {
        ...state,
        message: '',
      };
    }
    default:
      return state;
  }
}
