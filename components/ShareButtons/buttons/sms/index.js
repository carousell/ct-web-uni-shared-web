import React, { Component } from 'react';
import Button from './../../button'

export default class SMS extends Component {
  handleOnClick = () => {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  }

  render () {
    const { content, link, deviceName } = this.props;
    let messageText = encodeURIComponent(link);

    if (content) {
      messageText = `${content} ${messageText}`;
    }

    // if not work, try: https://stackoverflow.com/questions/6480462/how-to-pre-populate-the-sms-body-text-via-an-html-link
    const body =  deviceName === 'iPhone' ? `sms:&body=${messageText}` : `sms:?body=${messageText}`;

    return (
      <Button
        title="sms"
        href={body}
        imgSrc="https://static.chotot.com/storage/chotot-icons/svg/circle-sms.svg"
        onClick={this.handleOnClick}
      />
    )
  }
}
