import React, { Component } from 'react';
import Button from './../../button';
const fbAppId = '221564734660253';

export default class Facebook extends Component {
  componentDidMount() {
    const { facebookAppId } = this.props;
    if (!window.fbAsyncInit) {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: facebookAppId || fbAppId,
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v2.9'
        });
        window.FB.AppEvents.logPageView();
      };

      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }

  handleOnClick = () => {
    const { content, link, onClick } = this.props;

    if (onClick) {
      onClick();
    }

    window.FB.ui({
      method: 'share',
      href: link,
      quote: content,
    });
  }

  render() {
    if (this.props.hidden) return null;
    return (
      <Button
        title="facebook"
        onClick={this.handleOnClick}
        imgSrc="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-facebook.svg"
      />
    )
  }
}
