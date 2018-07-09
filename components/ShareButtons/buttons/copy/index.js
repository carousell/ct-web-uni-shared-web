import React, { Component } from 'react';
import Button from './../../button'
// import styled from 'styled-components';
import styles from './styles.scss';
import copy from 'copy-to-clipboard';

import icon from 'shared_web/components/ShareButtons/copylink.svg'

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
          imgSrc={icon}
        />
        {
          copiedTooltip && (
            <span className={styles.copiedTooltip}>
              Đã copy link
            </span>
          )
        }
      </span>
    )
  }
}
