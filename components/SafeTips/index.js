import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SafeTipsWrapper = styled.div`
  background-color: #fff;
  min-height: 115px;
  padding: 3px;
  img {
    margin-right: 15px;
  }
  a {
    font-size: 13px;
    color: #fe9900;
    margin-top: 5px;
    text-align: left;
  }
`;
const TipText = styled.div`
  font-size: 13px;
  text-align: left;
  font-style: italic;
  padding-top: 20px;
`;
const getRandomTip = (safeTipsCat) => {
  const randomNumTip = Math.floor(Math.random() * (safeTipsCat['sub-tips'].length)) + 1;
  const safeTip = {...safeTipsCat['sub-tips'][randomNumTip-1], url: safeTipsCat.url};
  return safeTip;
};

const SafeTips = props => {
  const {
    safeTips, category
  } = props;
  let safeTipObj;

  if (safeTips && safeTips[category]) {
    safeTipObj = getRandomTip(safeTips[category]);
  } else if (safeTips) {
    safeTipObj = getRandomTip(safeTips['default']);
  }
  return (
    <div>
      {safeTipObj && safeTipObj.image &&
        <SafeTipsWrapper>
          <div>
            <img alt="safe tips" className="pull-left" width={100} src={safeTipObj.image}/>
            <TipText className="mb-0">{safeTipObj.description}</TipText>
            <a className="pull-left" href={safeTipObj.url} target="_blank">Tìm hiểu thêm »</a>
          </div>
        </SafeTipsWrapper>
      }
    </div>
  );
};

SafeTips.propTypes = {
  safeTips: PropTypes.object,
  category: PropTypes.any
};

export default SafeTips;
