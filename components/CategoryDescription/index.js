import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styles from './Styles.scss';

const STATES = {
  show: {
    nextStatus: 'hide',
    nextHeight: '200px',
  },
  hide: {
    nextStatus: 'show',
    nextHeight: 'auto',
  },
};

class CategoryDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: STATES['show'].nextStatus,
      contentHeight: STATES['show'].nextHeight,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.status === 'show') {
      this.setState({
        status: STATES[this.state.status].nextStatus,
        contentHeight: STATES[this.state.status].nextHeight,
      });
    }
  }

  getComponent(status) {
    return {
      show: () => (
        <p id="seeMore" className={Styles.seeMore}>
          <i id="arrowIcon" className="fa fa-angle-double-up" aria-hidden="true" />
          <a id="buttonSeeMore" onClick={this.handleClick}>
            Thu gọn
          </a>
        </p>
      ),
      hide: () => (
        <p id="seeMore" className={Styles.seeMore}>
          <i id="arrowIcon" className="fa fa-angle-double-down" aria-hidden="true" />
          <a id="buttonSeeMore" onClick={this.handleClick}>
            Xem thêm
          </a>
        </p>
      )
    }[status];
  }

  handleClick = e => {
    this.setState({
      status: STATES[this.state.status].nextStatus,
      contentHeight: STATES[this.state.status].nextHeight,
    });
  }

  render() {
    const { catDescription } = this.props;
    const { status } = this.state;
    const ControlComponent = this.getComponent(status);

    return catDescription ? (
      <div className={cx("col-xs-12 text-justify text-muted", Styles.catDescription)}>
        <p
          id="contentSeoCat"
          style={{ height: this.state.contentHeight }}
          className={cx(Styles.contentWrap)}
          dangerouslySetInnerHTML={{ __html: catDescription }}
        />

        <ControlComponent />
      </div>
    ) : null;
  }
};

CategoryDescription.propTypes = {
  catDescription: PropTypes.string
};

export default CategoryDescription;
