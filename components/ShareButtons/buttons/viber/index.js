import React, { Component } from 'react';
import Button from './../../button'

export default class Viber extends Component {
  handleOnClick = () => {
    const { onClick } = this.props;

    if (onClick) {
      onClick();
    }
  }
  render () {
    const { content, link } = this.props;
    let messageText = encodeURIComponent(link);

    if (content) {
      messageText = `${content} ${messageText}`;
    }

    const viberDeeplink = encodeURIComponent(`viber://forward?text=${messageText}`);
    const viberLink = `https://3p3x.adj.st/?adjust_t=u783g1_kw9yml&adjust_fallback=https%3A%2F%2Fwww.viber.com%2F%3Futm_source%3DPartner%26utm_medium%3DSharebutton%26utm_campaign%3DDefualt&adjust_campaign=Sharebutton&adjust_deeplink=${viberDeeplink}`;

    return (
      <Button
        title="viber"
        target="_blank" href={viberLink}
        imgSrc="https://st.chotot.com/storage/chotot-icons/svg/circle-viber.svg"
        onClick={this.handleOnClick}
      />
    )
  }
}
