import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import LazyLoad from 'react-lazyload';

import Styles from './Styles.scss';
let statusSeeMore = true;

const seeMore = (e) => {
  e.preventDefault();
  const elem = document.getElementById('contentSeoCat');
  const elem1 = document.getElementById('buttonSeeMore');
  // const elem2 = document.getElementById('arrowIcon');
  if (statusSeeMore) {
    elem.style = 'height: auto';
    elem1.innerHTML = 'Thu gọn';
    // elem2.className = 'fa fa-angle-double-up';
  } else {
    elem.style = 'height: 200px';
    elem1.innerHTML = '⇓';
    // elem2.className = 'fa fa-angle-double-down';
  }
  statusSeeMore = !statusSeeMore;
};

class description extends React.Component {
  render() {
    const { catDescription } = this.props;
    return (
      <div>
        <div className={cx("col-xs-12 text-justify text-muted", Styles.catDescription)}>
          <p
            id="contentSeoCat"
            className={cx(Styles.contentWrap)}
            dangerouslySetInnerHTML={{__html: catDescription}}
          >

          </p>
          <p id="seeMore" className={Styles.seeMore}>
            <a id="buttonSeeMore" onClick={e => seeMore(e)}>
              ⇓
            </a>
          </p>
        </div>
      </div>
    )
  }
};
const withLazy = function (Component, props) {
  return class extends React.Component {
    render() {
      return (
        <LazyLoad height={100} offset={200}>
          <Component {...props}/>
        </LazyLoad>
      );
    }
  }
};

class CategoryDescription extends React.Component {
  render() {
    const Description = __CLIENT__ ? withLazy(description, this.props) : description;
      return (
        <div>
          <Description {...this.props}/>
        </div>
      );
  }
};
CategoryDescription.propTypes = {
  catDescription: PropTypes.string
};
export default CategoryDescription;
