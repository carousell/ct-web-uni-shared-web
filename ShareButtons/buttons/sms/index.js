import React, { Component } from 'react';
import Button from './../../button'

export default class SMS extends Component {
  handleOnClick = () => {
    const { clickShareButton } = this.props;
    if (clickShareButton) {
      clickShareButton({ xtName: 'share_ad_via_sms' });
    }
  }
  render () {
    const { link, mobileDevice } = this.props;
    if (!mobileDevice) {
      return null;
    }
    const taggedLink = `${link}#xtatc=INT-5-[share_ad_via_sms]`;
    const messageText = encodeURIComponent(taggedLink);
    // if not work, try: https://stackoverflow.com/questions/6480462/how-to-pre-populate-the-sms-body-text-via-an-html-link
    const smsLink = mobileDevice === 'iPhone' ? `sms:&body=${messageText}` : `sms:?body=${messageText}`;

    return (
      <Button
        href={smsLink}
        imgSrc="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-sms.svg"
        onClick={this.handleOnClick}
      />
    )
  }
}
