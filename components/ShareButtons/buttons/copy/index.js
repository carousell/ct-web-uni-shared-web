import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './../../button'
import copy from 'copy-to-clipboard';

const Wrapper = styled.span`
  position: relative;
`;

const Tooltip = styled.span`
  border-radius: 2px;
  position: absolute;
  top: 20px;
  left: 0;
  background: black;
  opacity: 0.8;
  color: #fff;
  padding: 5px;
  width: 100px;
`;

export default class Copy extends Component {
  state = {
    copiedTooltip: false
  }

  handleOnClick = () => {
    const { content, link, onClick } = this.props;
    let taggedLink = link;

    if (content) {
      taggedLink = `${content} ${link}`;
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

    if (onClick) {
      onClick();
    }
  }

  render () {
    const { copiedTooltip } = this.state;
    return (
      <Wrapper>
        <Button
          title="copy"
          onClick={this.handleOnClick}
          imgSrc="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-copylink.svg"
        />
        {
          copiedTooltip && (
            <Tooltip>
              Đã copy link
            </Tooltip>
          )
        }
      </Wrapper>
    )
  }
}
