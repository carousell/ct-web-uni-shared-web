export const GET_SAVE_AD = 'SaveAd/GET_SAVE_AD';
export const GET_SAVE_AD_SUCCESS = 'SaveAd/GET_SAVE_AD_SUCCESS';
export const GET_SAVE_AD_FAIL = 'SaveAd/GET_SAVE_AD_FAIL';

export const SAVE_AD = 'SaveAd/SAVE_AD';
export const SAVE_AD_SUCCESS = 'SaveAd/SAVE_AD_SUCCESS';
export const SAVE_AD_FAIL = 'SaveAd/SAVE_AD_FAIL';

export const UNSAVE_AD = 'SaveAd/UNSAVE_AD';
export const UNSAVE_AD_SUCCESS = 'SaveAd/UNSAVE_AD_SUCCESS';
export const UNSAVE_AD_FAIL = 'SaveAd/UNSAVE_AD_FAIL';

export const TRACK_SAVE_NON_LOGGEDIN = 'SaveAd/TRACK_SAVE_NON_LOGGEDIN';
export const TRACK_SAVE_LOGGEDIN = 'SaveAd/TRACK_SAVE_LOGGEDIN';
export const TRACK_UNSAVE_LOGGEDIN = 'SaveAd/TRACK_UNSAVE_LOGGEDIN';

export const RESET_MESSAGE = 'SaveAd/UPDATE_MESSAGE';

export const TRACKING_DATA = {
  [TRACK_SAVE_NON_LOGGEDIN]: (pageName) => {
    return {
      actionType: TRACK_SAVE_NON_LOGGEDIN,
      options: {
        click: {
          chapter1: 'save_ad',
          chapter2: pageName,
          name: 'save_nonloggedin',
          type: 'action',
        }
      }
    }
  },
  [TRACK_SAVE_LOGGEDIN]: (pageName) => {
    return {
      actionType: TRACK_SAVE_LOGGEDIN,
      options: {
        click: {
          chapter1: 'save_ad',
          chapter2: pageName,
          name: 'save_loggedin',
          type: 'action',
        }
      }
    }
  },
  [TRACK_UNSAVE_LOGGEDIN]: (pageName) => {
    return {
      actionType: TRACK_UNSAVE_LOGGEDIN,
      options: {
        click: {
          chapter1: 'save_ad',
          chapter2: pageName,
          name: 'unsave',
          type: 'action',
        }
      }
    }
  },
}
