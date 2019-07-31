import React from 'react';
import PropTypes from 'prop-types';
import { AvatarImage } from 'components';
import { RatingStar } from 'ct-components';
import {
  UserProfileInfoWrapper,
  ProfileWrapper,
  PrimaryButton,
  SecondaryButton,
  NameBounder,
  NameDiv,
  StatusOnlineDiv,
  OnlineBullet,
  InfoWrapper,
  InfoItem,
  SeperateLine,
  ShopVerifiedWrapper,
  FlexDiv,
} from './styles';

import moment from 'moment';
require('moment/locale/vi');
moment.locale('vi');

const AdTypeEnum = {
  SHOP: 'shop',
  PRO: 'pro',
  COMPANY: 'company',
  PRIVATE: 'private',
  SHOP_VERIFIED: 'shop_verified'
};

const InfoItemComponent = ({ title, value }) => {
  return (
    <InfoItem>
      <p>{title}</p>
      <span>{value}</span>
    </InfoItem>
  );
}

const shopVerifiedElement = () => {
  return (
    <ShopVerifiedWrapper>
      <span>Cửa hàng đã cung cấp </span>&nbsp;
      <span >
        <img src="https://static.chotot.com.vn/storage/chotot-icons/svg/address_verified.svg" />
        <img src="https://static.chotot.com.vn/storage/chotot-icons/svg/certificate_verified.svg" />
        <img src="https://static.chotot.com.vn/storage/chotot-icons/svg/email_verified.svg" />
        <img src="https://static.chotot.com.vn/storage/chotot-icons/svg/phone_verified.svg" />
      </span>
    </ShopVerifiedWrapper>
  );
};

const UserProfileInfo = ({ adTypeConfig, profile = {}, rating = {}, children, goToRatingDetail, isShowRating, chatStatus = {}, ...other }) => {

  let privateElement = null;  // notice goToShop func in chotot-xe project
  let AdTypeLabel = '';
  let AdTypeImg = '';
  const ratingDetailUrl = `${adTypeConfig.url}/${profile.account_oid}/chi-tiet-danh-gia`;

  // user or shop
  if ([AdTypeEnum.PRIVATE, AdTypeEnum.PRO, AdTypeEnum.COMPANY].indexOf(adTypeConfig.adType) > -1) {
    if (adTypeConfig.adType === AdTypeEnum.PRO || adTypeConfig.adType === AdTypeEnum.COMPANY) {
      AdTypeLabel = 'Bán chuyên';
      AdTypeImg = 'https://static.chotot.com.vn/storage/chotot-icons/svg/suitcase.svg';

      if (adTypeConfig.category >= 1000 && adTypeConfig.category < 2000) {  // cate property
        AdTypeLabel = 'Môi giới';
      }
      if (adTypeConfig.categoryId >= 13000 && adTypeConfig.categoryId < 14000) {  // cate job
        AdTypeLabel = 'Công ty';
      }

    } else {
      AdTypeLabel = 'Cá nhân';
      AdTypeImg = 'https://static.chotot.com.vn/storage/chotot-icons/svg/circle-user.svg';
    }

    privateElement = (
      <a
        href={`${adTypeConfig.url}${profile.account_oid ? `/${profile.account_oid}` : ''}#xtatc=INT-10-[Adview]`}
        target="_blank"
      >
        <SecondaryButton>
          Xem trang
        </SecondaryButton>
      </a>
    );

  } else if ([AdTypeEnum.SHOP, AdTypeEnum.SHOP_VERIFIED].indexOf(adTypeConfig.adType) > -1) {
    AdTypeLabel = 'Cửa hàng';
    let labelBtn = 'Xem Cửa hàng';
    if (adTypeConfig.category >= 1000 && adTypeConfig.category < 2000) {
      AdTypeLabel = 'Chuyên trang BĐS';
      labelBtn = 'Xem Chuyên trang';
    }

    AdTypeImg = adTypeConfig.adType === AdTypeEnum.SHOP_VERIFIED ?
      'https://static.chotot.com.vn/storage/chotot-icons/png/verified-house.png' :
      'https://static.chotot.com.vn/storage/chotot-icons/png/house.png';

    privateElement = (
      <a
        href={`${adTypeConfig.url}#ad_view`}
        target="_blank"
      >
        <PrimaryButton>
          {labelBtn}
        </PrimaryButton>
      </a>
    );
  }

  // chat status
  const onlineStatus = chatStatus.online_status;
  const timeAgo = onlineStatus ? 'Đang hoạt động' :
    (chatStatus.online_time === 0 ? 'Chưa hoạt động' : `Hoạt động ${moment(chatStatus.online_time * 1000).fromNow()}`);
  let responseRateText = '---';
  if (!!chatStatus.response_rate) {
    responseRateText = chatStatus.response_rate === -1 ? (chatStatus.response_rate_text || '---') : `${Math.floor(chatStatus.response_rate * 100)}%`;
  }

  return (
    <UserProfileInfoWrapper>
      <ProfileWrapper>
        <AvatarImage avatar={adTypeConfig.avatar} />
        <NameBounder>
          <FlexDiv>
            <NameDiv>
              <b>{adTypeConfig.name} </b>
              {adTypeConfig.adType === AdTypeEnum.SHOP_VERIFIED && (
                <img src="https://static.chotot.com.vn/storage/chotot-icons/svg/verification.svg" height="20" />
              )}
            </NameDiv>
            {privateElement}
          </FlexDiv>

          {/* online time */}
          {chatStatus.user_id ? // check chat status loaded
            <StatusOnlineDiv>
              <OnlineBullet online={onlineStatus}>•</OnlineBullet>
              {timeAgo}
            </StatusOnlineDiv> : null
          }
        </NameBounder>
      </ProfileWrapper>

      {/* shop verify icon */}
      {adTypeConfig.adType === AdTypeEnum.SHOP_VERIFIED ? shopVerifiedElement() : null}

      <InfoWrapper>
        {/* Personal */}
        <InfoItemComponent
          title={AdTypeLabel}
          value={<img src={AdTypeImg} height="20" />}
        />

        {/* Rating */}
        {isShowRating && <SeperateLine />}
        {isShowRating &&
          <a href={ratingDetailUrl}>
            <InfoItemComponent
              title="Đánh giá"
              value={!rating.total ?
                '---' :
                <RatingStar rating={rating.avg} width="13px" />
              }
            />
          </a>
        }

        {/* Response chat */}
        <SeperateLine />
        <InfoItemComponent
          title="Phản hồi chat"
          value={responseRateText}
        />

      </InfoWrapper>
    </UserProfileInfoWrapper>
  );
};

UserProfileInfo.propTypes = {
  adTypeConfig: PropTypes.object,
  profile: PropTypes.object,
  children: PropTypes.any
};

export default UserProfileInfo;
