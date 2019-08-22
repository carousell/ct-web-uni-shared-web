import styled, { css } from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  display: block;
  max-width: 460px;
  width: 80vw;
  z-index: 10000;
  left: 0;
  right: 0;
  top: 50vh;
  transform: translateY(-50%);
  margin: 0 auto;
  background-color: white;
  transition: opacity 0.5s, visibility 0.5s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  background-clip: padding-box;
  outline: 0;
  @media (max-width: 768px) {
    width: ${props => props.fullScreenMobile ? '100%' : null};
    height: ${props => props.fullScreenMobile ? '100%' : null};
    top:  ${props => props.fullScreenMobile ? '0px' : `50vh`};
  }
  border-radius: ${props => props.borderRadius ? props.borderRadius : null}
  overflow: hidden;
  visibility: hidden;
  opacity: 0;

  ${props => props.isOpen && css`
    visibility: visible;
    opacity: 1;
  `}
`;

const BackDrop = styled.div`
  display: block;
  opacity: 0.5;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
  visibility: hidden;
  transition: opacity 0.5s, visibility 0.5s;
  opacity: 0;

  ${props => props.isOpen && css`
    visibility: visible;
    opacity: 0.5;
  `}
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 40px;
  height: 40px;

  .icon {
    margin: 10px auto;
    width: 20px;
    height: 20px;
    cursor: pointer;
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    color: #999;
    border-radius: 10px;
    background-color: #666;
    color: #fff;
  }
`;

export {
  ModalWrapper,
  BackDrop,
  CloseButton,
}