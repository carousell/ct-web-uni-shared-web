import React, { Component } from 'react';
import Button from './../../button'

export default class Viber extends Component {
  handleOnClick = () => {
    const { clickShareButton } = this.props;
    if (clickShareButton) {
      clickShareButton({ xtName: 'share_ad_via_viber' });
    }
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
        imgSrc="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-viber.svg"
        onClick={this.handleOnClick}
      />
    )
  }
}
