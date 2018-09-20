import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './../../button'
import copy from 'copy-to-clipboard';

const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`;

const Tooltip = styled.span`
  border-radius: 2px;
  position: absolute;
  top: 55px;
  left: 0;
  background: black;
  opacity: 0.8;
  color: #fff;
  padding: 5px;
  width: 100px;
  z-index: 1;
`;

export default class Copy extends Component {
  constructor(props) {
    super(props);
    this.timer = undefined;
    this.state = {
      showTooltip: false
    };
  }

  handleOnClick = () => {
    const { content, link, onClick } = this.props;
    let taggedLink = link;

    if (content) {
      taggedLink = `${content} ${link}`;
    }

    copy(taggedLink);

    this.setState({
      showTooltip: true
    });

    this.timer = setTimeout(() => {
      this.setState({
        showTooltip: false
      }, () => clearTimeout(this.timer));
    }, 2000);

    if (onClick) {
      onClick();
    }
  }

  render () {
    return (
      <Wrapper>
        <Button
          title="copy"
          onClick={this.handleOnClick}
          imgSrc="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-copylink.svg"
        />
        {
          this.state.showTooltip && (
            <Tooltip>
              Đã copy link
            </Tooltip>
          )
        }
      </Wrapper>
    )
  }
}
