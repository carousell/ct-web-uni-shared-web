import React, { Component } from 'react';
import Button from './../../button'

export default class Messenger extends Component {
  handleOnClick = () => {
    const { link, isMobile, onClick } = this.props;
    const params = {
      method: 'send',
      link,
    };

    if (isMobile) {
      params.display = 'popup';
    }

    window.FB.ui(params);

    if (onClick) {
      onClick();
    }
  }

  render () {
    return (
      <Button
        title="messenger"
        onClick={this.handleOnClick}
        imgSrc="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-messenger.svg"
      />
    )
  }
}
