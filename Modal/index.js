import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: absolute;
  display: block;
  opacity: 1;
  max-width: 460px;
  width: 80vw;
  z-index: 10000;
  left: 0;
  right: 0;
  top: 50vh;
  transform: translateY(-50%);
  margin: 0 auto;
  background-color: white;
  overflow-y: scroll;
  transition: top 0.5s, opacity 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  background-clip: padding-box;
  outline: 0;
  @media (max-width: 768px) {
    width: ${props => props.fullScreenMobile ? '100%' : null};
    height: ${props => props.fullScreenMobile ? '100%' : null};
    top:  ${props => props.fullScreenMobile ? '0px' : `50vh`};
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

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
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
`;

const __CLIENT__ = typeof window !== "undefine";

class ModalContent extends React.Component {  // eslint-disable-line
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
  }

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
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      const { onHide } = this.props;
      if (onHide) {
        onHide();
      }
    }
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
          <ModalWrapper top={top} innerRef={(node) => { this.wrapperRef = node }}>
            <CloseButton onClick={this.props.onHide}>
              ×
            </CloseButton>
            {this.props.children}
          </ModalWrapper>
        }
      </div>
    );
  }
}

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
