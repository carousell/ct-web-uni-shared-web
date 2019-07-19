import React, { PropTypes } from 'react';
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
} from './styles';

import moment from 'moment';
require('moment/locale/vi');
moment.locale('vi');

const AdTypeEnum = {
  SHOP: 'shop',
  PRO: 'pro',
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

  let privateElement = null;
  let AdTypeLabel = '';
  let AdTypeImg = '';
  const ratingDetailUrl = `${adTypeConfig.url}/${profile.account_oid}/chi-tiet-danh-gia`;

  // user or shop
  if (adTypeConfig.adType === AdTypeEnum.PRIVATE || adTypeConfig.adType === AdTypeEnum.PRO) {
    if (adTypeConfig.adType === AdTypeEnum.PRO) {
      AdTypeLabel = 'Bán chuyên';
      AdTypeImg = 'https://static.chotot.com.vn/storage/chotot-icons/svg/suitcase.svg';
    } else {
      AdTypeLabel = 'Cá nhân';
      AdTypeImg = 'https://static.chotot.com.vn/storage/chotot-icons/svg/circle-user.svg';
    }

    privateElement = (
      <a
        href={`${adTypeConfig.url}/${profile.account_oid}#xtatc=INT-10-[Adview]`}
        target="_blank"
      >
        <SecondaryButton>
          Xem trang
        </SecondaryButton>
      </a>
    );

  } else if ([AdTypeEnum.SHOP, AdTypeEnum.SHOP_VERIFIED].indexOf(adTypeConfig.adType) > -1) {
    AdTypeLabel = 'Cửa hàng';
    AdTypeImg = adTypeConfig.adType === AdTypeEnum.SHOP_VERIFIED ?
      'https://static.chotot.com.vn/storage/chotot-icons/png/verified-house.png' :
      'https://static.chotot.com.vn/storage/chotot-icons/png/house.png';
    privateElement = (
      <a
        href={`${adTypeConfig.url}#ad_view`}
        target="_blank"
      >
        <PrimaryButton>
          Xem cửa hàng
        </PrimaryButton>
      </a>
    );
  }

  // chat status
  const onlineStatus = chatStatus.online_status;
  const timeAgo = onlineStatus ? 'Đang hoạt động' :
    (chatStatus.online_time === 0 ? 'Không hoạt động' : `Hoạt động ${moment(chatStatus.online_time * 1000).fromNow()}`);

  return (
    <UserProfileInfoWrapper>
      <ProfileWrapper>
        <AvatarImage avatar={adTypeConfig.avatar} />
        <NameBounder>
          <NameDiv>
            <b>{adTypeConfig.name} </b>
            {adTypeConfig.adType === AdTypeEnum.SHOP_VERIFIED && (
              <img src="https://static.chotot.com.vn/storage/chotot-icons/svg/verification.svg" height="20" />
            )}
          </NameDiv>

          {/* online time */}
          {chatStatus.online_time &&
            <StatusOnlineDiv>
              <OnlineBullet online={onlineStatus}>•</OnlineBullet>
              {timeAgo}
            </StatusOnlineDiv>
          }
        </NameBounder>
        {privateElement}
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
          value={chatStatus.response_rate ? `${chatStatus.response_rate * 100}%` : '---'}
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
