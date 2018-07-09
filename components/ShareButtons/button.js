import React, { Component } from 'react';
import styled from 'styled-components';
// import styles from './styles.scss';

//
const A = styled.a`
  cursor: pointer;
  margin: 10px 5px 0 10px;
  display: inline-block;
  @media (min-width: 480px) {
    margin: 10px 10px 0 10px;
  }
`;

export default class Button extends Component {
  render () {
    const { imgSrc, onClick, ...rest } = this.props;
    return (
      <A onClick={onClick} {...rest}>
        <img src={imgSrc} height={40} width={40} />
      </A>
    )
  }
}