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
    const { link, mobileDevice } = this.props;
    if (!mobileDevice) {
      return null;
    }
    const messageText = encodeURIComponent(link);
    // if not work, try: https://stackoverflow.com/questions/6480462/how-to-pre-populate-the-sms-body-text-via-an-html-link
    const smsLink = mobileDevice === 'iPhone' ? `sms:&body=${messageText}` : `sms:?body=${messageText}`;

    return (
      <Button
        title="sms"
        href={smsLink}
        imgSrc="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-sms.svg"
        onClick={this.handleOnClick}
      />
    )
  }
}
