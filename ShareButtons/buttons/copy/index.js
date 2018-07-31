import React, { Component } from 'react';
import Button from './../../button'
import copy from 'copy-to-clipboard';

export default class Copy extends Component {

  state = {
    copiedTooltip: false
  }

  handleOnClick = () => {
    // eslint-disable-next-line
    const { link, clickShareButton } = this.props;
    const taggedLink = `${link}#xtatc=INT-5-[share_ad_via_copy]`;
    copy(taggedLink);
    this.setState({
      copiedTooltip: true
    });
    setTimeout(() => {
      this.setState({
        copiedTooltip: false
      });
    }, 2000);
    clickShareButton({ xtName: 'share_ad_via_copylink' });
  }

  render () {
    const { copiedTooltip } = this.state;
    return (
      <span>
        <Button
          onClick={this.handleOnClick}
          imgSrc="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-copylink.svg"
        />
        {
          copiedTooltip && (
            <span>
              Đã copy link
            </span>
          )
        }
      </span>
    )
  }
}
