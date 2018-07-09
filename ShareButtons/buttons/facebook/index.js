import React, { Component } from 'react';
import Button from './../../button'
// import styled from 'styled-components';
// import styles from './styles.scss';

import icon from '../../../../../static/vertical-xe-img/icons/facebook.svg'

const fbAppId = '221564734660253'
//
// const MainComponent = styled.div`
//   background-image: url("/static/chotot-img/c2cCategoryIcon/3030.svg");
// `;

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