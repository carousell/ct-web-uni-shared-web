import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styled, { injectGlobal } from 'styled-components';
injectGlobal`
div.custom-modal-content {
       display: block;
      position: absolute;
      top: -300px;
      opacity: 1;
      width: 300px;
      height: 200px;
      z-index: 10000;
      left: 0;
      right: 0;
      margin: 0 auto;
      background-color: white;
      overflow-y: scroll;
      transition: top 0.5s, opacity 0.3s;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      // -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      background-clip: padding-box;
      outline: 0;
}
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
`;
class ModalContent extends React.Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    children: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      top: -300
    };
  }
  componentWillMount() {
    if (__CLIENT__) {
      this.setState({
        isOpen: this.props.show
      });
    }
  };
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    this.startTransitionModal();
  }
  componentWillReceiveProps(nextProps) {
    if (__CLIENT__) {
      this.setState({
        isOpen: nextProps.show
      });
    }
  };
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      console.log('==> click out side', event);
      const { onHide } = this.props;
      if (onHide) {
        onHide();
      }
    }
  };
  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };
  startTransitionModal = () => {
    this.setState({
      top: 60
    });
  }
  render() {
    const { isOpen, top } = this.state;
    return (
      <div>
        {isOpen && <BackDrop />}
        {isOpen &&
          <div style={{ top: `${top}px` }} className={cx('custom-modal-content')} ref={this.setWrapperRef}>
            {this.props.children}
          </div>
        }
      </div>
    );
  }
};

const Modal = ({ show, onHide, children }) => {
  return (
    <div>
      {show &&
        <ModalContent
          show={show}
          onHide={onHide}
          children={children}
        />
      }
    </div>
  );
};
Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  children: PropTypes.any
};

export default Modal;
