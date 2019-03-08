import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import Styles from './Styles.scss';

const SeoKeywords = ({ keywords = [] }) => {

  const element = keywords.length > 0 && (
    <div className={Styles.keywords}>
      <h4 className={cx(Styles.header, "large")}>
        <strong>Các từ khóa phổ biến</strong>
      </h4>

      <ul className="container" itemScope itemType="http://schema.org/ItemList">
        {keywords.map((obj, index) => (
          <li
            key={index}
            itemScope
            itemType="http://schema.org/ListItem"
            itemProp="itemListElement"
            className='col-sm-4 col-xs-6'
          >
            <meta itemProp="position" content={index + 1} />
            <a itemProp="url" className={cx(Styles.keywords)} href={obj.uri}>
              <span>{obj.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return element;
};

SeoKeywords.propTypes = {
  keywords: PropTypes.array
};

export default SeoKeywords;
