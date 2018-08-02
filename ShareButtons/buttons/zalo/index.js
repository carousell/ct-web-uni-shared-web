import React, { Component } from 'react';
import Button from './../../button'

const zaloAppId = '570044068386186227'

export default class Zalo extends Component {
  componentDidMount() {
    global._babelPolyfill = false;
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (global.ZaloSocialSDK) {
        global.ZaloSocialSDK.reload();
        return;
      }
      js = d.createElement(s); js.id = id;
      js.src = "https://sp.zalo.me/plugins/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'zalo-jssdk'));
  }

  handleOnClick = () => {
    const { clickShareButton } = this.props;
    if (clickShareButton) {
      clickShareButton({ xtName: 'share_ad_via_zalo' });
    }
  }

  render () {
    const { content, link } = this.props;
    const taggedLink = `${link}#xtatc=INT-5-[share_ad_via_zalo]`;
    const shareContent = `${content} ${taggedLink}`;
    return (
      <Button
        onClick={this.handleOnClick}
        imgSrc="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-zalo.svg"
        className={'zalo-share-button'}
        data-href={shareContent}
        data-oaid={zaloAppId}
        data-layout="2"
        data-color="blue"
        data-customize
      />
    )
  }
}
