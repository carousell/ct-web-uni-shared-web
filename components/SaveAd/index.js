import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { saveAd, unsaveAd, getSaveAd, resetMessage } from './actions';
import reducer from './reducer';

const like = 'https://static.chotot.com.vn/storage/adType/adItem/heart.png';
const unlike = 'https://static.chotot.com.vn/storage/adType/adItem/heart-active.png';

const Wrapper = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`;

const FullWrapper = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  border: 1px solid #c90927;
  border-radius: 20px;
  padding: 5px 10px;
  color: #c90927;
`;

const STATE = {
  like: {
    icon: { src: like, alt: 'like', label: 'Yêu thích' },
    action: saveAd,
  },
  unlike: {
    icon: { src: unlike, alt: 'unlike', label: 'Đã thích' },
    action: unsaveAd,
  }
};

class SaveAd extends React.Component {
  handleClick = e => {
    const { require: { func, cb }, gatewayUrl, onClick, dispatch } = this.props;

    if (onClick) {
      onClick(this.props);
    }

    if (func()) {
      const { active, listId, status } = this.props;
      const state = active ? 'unlike' : 'like';
      const config = STATE[state];
      const { action } = config;
      dispatch(action({ listId, gatewayUrl, status }));
    } else {
      cb();
    }
  }

  getItem = (icon, size, fullView) => {
    return {
      true: () => (
        <FullWrapper id='btn_save_ad' onClick={this.handleClick}>
          {icon.label}
          &nbsp;
          <img width={size} src={icon.src} alt={icon.alt} />
        </FullWrapper>
      ),
      false: () => (
        <Wrapper id='btn_save_ad' onClick={this.handleClick}>
          <img width={size} src={icon.src} alt={icon.alt} />
        </Wrapper>
      )
    }[fullView]
  }

  render() {
    const { active, size, fullView = false } = this.props;
    const state = active ? 'unlike' : 'like';
    const config = STATE[state];
    const { icon } = config;

    return this.getItem(icon, size, fullView)();

  }
}

const mapStateToProps = state => {
  return {
    saveAd: state.saveAd,
  };
};

SaveAd.propTypes = {
  size: PropTypes.number,
  active: PropTypes.bool,
  require: PropTypes.shape({
    func: PropTypes.func,
    cb: PropTypes.func,
  }).isRequired,
  fullView: PropTypes.bool,
}

export default connect(mapStateToProps, null)(SaveAd);
export { reducer, saveAd, unsaveAd, getSaveAd, resetMessage };
