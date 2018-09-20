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
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  }

  render () {
    const { link } = this.props;
    return (
      <Button
        title="zalo"
        onClick={this.handleOnClick}
        imgSrc="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-zalo.svg"
        className={"zalo-share-button"}
        data-href={link}
        data-oaid={zaloAppId}
        data-layout="2"
        data-color="blue"
        data-customize={true}
      />
    )
  }
}
