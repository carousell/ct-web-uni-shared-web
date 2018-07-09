import React, { Component } from 'react';
import Button from './../../button'
import icon from 'shared_web/components/ShareButtons/facebook.svg';
const fbAppId = '221564734660253';
export default class Facebook extends Component {
  componentDidMount() {
    /* eslint-disable */
    if (!window.fbAsyncInit) {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId            : fbAppId,
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v2.9'
        });
        window.FB.AppEvents.logPageView();
      };

      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
    /* eslint-enable */
  }
  handleOnClick = () => {
    // eslint-disable-next-line
    const { link, clickShareButton } = this.props;
    const taggedLink = `${link}#xtatc=INT-5-[share_ad_via_facebook]`;
    clickShareButton({ xtName: 'share_ad_via_facebook' });
    window.FB.ui({
      method: 'share',
      href: taggedLink,
      quote: ''
    });
  }

  render () {
    return (
      <Button onClick={this.handleOnClick} imgSrc={icon} />
    )
  }
}
