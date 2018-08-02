import React, { Component } from 'react';
import Button from './../../button'
import copy from 'copy-to-clipboard';

export default class Copy extends Component {

  state = {
    copiedTooltip: false
  }

  handleOnClick = () => {
    const { content, link, clickShareButton } = this.props;
    let taggedLink = `${link}#xtatc=INT-5-[share_ad_via_copy]`;
    if (content) {
      taggedLink = `${content} ${taggedLink}`;
    }

    copy(taggedLink);

    this.setState({
      copiedTooltip: true
    });

    setTimeout(() => {
      this.setState({
        copiedTooltip: false
      });
    }, 2000);

    if (clickShareButton) {
      clickShareButton({ xtName: 'share_ad_via_copylink' });
    }
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
