import React, { Component } from 'react';
import Button from './../../button'
// import styled from 'styled-components';
// import styles from './styles.scss';

import icon from 'shared_web/components/ShareButtons/sms.svg';

export default class SMS extends Component {
  handleOnClick = () => {
    // eslint-disable-next-line
    const { clickShareButton } = this.props;
    clickShareButton({ xtName: 'share_ad_via_sms' });
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
        imgSrc={icon}
        onClick={this.handleOnClick}
      />
    )
  }
}
