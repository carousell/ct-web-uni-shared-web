import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styles from './Styles.scss';
let statusSeeMore = true;

const seeMore = (e) => {
  e.preventDefault();
  const elem = document.getElementById('contentSeoCat');
  const elem1 = document.getElementById('buttonSeeMore');
  const elem2 = document.getElementById('arrowIcon');
  if (statusSeeMore) {
    elem.style = 'height: auto';
    elem1.innerHTML = 'Thu gọn';
    elem2.className = 'fa fa-angle-double-up';
  } else {
    elem.style = 'height: 200px';
    elem1.innerHTML = 'Xem thêm';
    elem2.className = 'fa fa-angle-double-down';
  }
  statusSeeMore = !statusSeeMore;
};

/*eslint-disable */
const CategoryDescription = ({ catDescription }) => {
  return catDescription ? (
    <div className={cx("col-xs-12 text-justify text-muted", Styles.catDescription)}>
      <p
        id="contentSeoCat"
        className={cx(Styles.contentWrap)}
        dangerouslySetInnerHTML={{ __html: catDescription }}
      >
      </p>
      <p id="seeMore" className={Styles.seeMore}>
        <i id="arrowIcon" className="fa fa-angle-double-down" aria-hidden="true"></i>
        <a id="buttonSeeMore" onClick={e => seeMore(e)} >
          Xem thêm
        </a>
      </p>
    </div>
  ) : null;
};
CategoryDescription.propTypes = {
  catDescription: PropTypes.string
};
export default CategoryDescription;
