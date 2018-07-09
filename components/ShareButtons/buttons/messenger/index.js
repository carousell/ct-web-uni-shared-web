import React, { Component } from 'react';
import Button from './../../button'
// import styled from 'styled-components';
// import styles from './styles.scss';

import icon from '../../../../../static/vertical-xe-img/icons/messenger.svg'

export default class Messenger extends Component {
  handleOnClick = () => {
    // eslint-disable-next-line
    const { link, mobileDevice, clickShareButton } = this.props;
    const taggedLink = `${link}#xtatc=INT-5-[share_ad_via_fbmessenger]`;
    const params = {
      method: 'send',
      link: taggedLink
    };

    if (mobileDevice) {
      params.display = 'popup';
    }

    window.FB.ui(params);
    clickShareButton({ xtName: 'share_ad_via_fbmessenger' });
  }

  render () {
    const { mobileDevice } = this.props;
    if (mobileDevice) {
      return null;
    }
    return (
      <Button onClick={this.handleOnClick} imgSrc={icon} />
    )
  }
}