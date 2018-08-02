import React, { Component } from 'react';
import Button from './../../button'

export default class Messenger extends Component {
  handleOnClick = () => {
    const { content, link, mobileDevice, clickShareButton } = this.props;
    const taggedLink = `${link}#xtatc=INT-5-[share_ad_via_fbmessenger]`;
    console.log('content', content);
    const params = {
      method: 'send',
      link: taggedLink,
      quote: content,
    };

    if (mobileDevice) {
      params.display = 'popup';
    }

    window.FB.ui(params);
    if (clickShareButton) {
      clickShareButton({ xtName: 'share_ad_via_fbmessenger' });
    }
  }

  render () {
    const { mobileDevice } = this.props;
    if (mobileDevice) {
      return null;
    }
    return (
      <Button
        onClick={this.handleOnClick}
        imgSrc="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-messenger.svg"
      />
    )
  }
}
