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

const STATE = {
  like: {
    icon: { src: like, alt: 'like' },
    action: saveAd,
  },
  unlike: {
    icon: { src: unlike, alt: 'unlike' },
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

  render() {
    const { active, size } = this.props;
    const state = active ? 'unlike' : 'like';
    const config = STATE[state];
    const { icon } = config;
    return (
      <Wrapper onClick={this.handleClick}>
        <img width={size} src={icon.src} alt={icon.alt} />
      </Wrapper>
    )
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
}

export default connect(mapStateToProps, null)(SaveAd);
export { reducer, saveAd, unsaveAd, getSaveAd, resetMessage };
