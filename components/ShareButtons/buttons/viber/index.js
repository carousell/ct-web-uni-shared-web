import React, { Component } from 'react';
import Button from './../../button'
// import styled from 'styled-components';
// import styles from './styles.scss';

import icon from 'shared_web/components/ShareButtons/viber.svg';

export default class Viber extends Component {
  handleOnClick = () => {
    // eslint-disable-next-line
    const { clickShareButton } = this.props;
    clickShareButton({ xtName: 'share_ad_via_viber' });
  }
  render () {
    const { link, mobileDevice } = this.props;
    if (!mobileDevice) {
      return null;
    }
    const taggedLink = `${link}#xtatc=INT-5-[share_ad_via_viber]`;
    const messageText = encodeURIComponent(taggedLink);
    const viberDeeplink = encodeURIComponent(`viber://forward?text=${messageText}`);
    const viberLink = `https://3p3x.adj.st/?adjust_t=u783g1_kw9yml&adjust_fallback=https%3A%2F%2Fwww.viber.com%2F%3Futm_source%3DPartner%26utm_medium%3DSharebutton%26utm_campaign%3DDefualt&adjust_campaign=Sharebutton&adjust_deeplink=${viberDeeplink}`;

    return (
      <Button
        target="_blank" href={viberLink}
        imgSrc={icon}
        onClick={this.handleOnClick}
      />
    )
  }
}