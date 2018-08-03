import React, { Component } from 'react';
import Button from './../../button'

export default class Messenger extends Component {
  handleOnClick = () => {
    const { link, mobileDevice, onClick } = this.props;
    const params = {
      method: 'send',
      link,
    };

    if (mobileDevice) {
      params.display = 'popup';
    }

    window.FB.ui(params);

    if (onClick) {
      onClick();
    }
  }

  render () {
    const { mobileDevice } = this.props;
    if (mobileDevice) {
      return null;
    }
    return (
      <Button
        title="messenger"
        onClick={this.handleOnClick}
        imgSrc="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-messenger.svg"
      />
    )
  }
}
