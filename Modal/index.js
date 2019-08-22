import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalWrapper,
  BackDrop,
  CloseButton,
} from './styles';

class Modal extends React.Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    children: PropTypes.any
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
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

  render() {
    return (
      <div>
        <BackDrop isOpen={this.props.isOpen} />
        <ModalWrapper innerRef={(node) => { this.wrapperRef = node }} isOpen={this.props.isOpen}>
          <CloseButton onClick={this.props.onHide}>
            <div className='icon'>
              ×
            </div>
          </CloseButton>
          {this.props.children}
        </ModalWrapper>
      </div>
    );
  }
}

export default Modal;
