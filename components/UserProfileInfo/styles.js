import styled from 'styled-components';

const UserProfileInfoWrapper = styled.div`
  border-top: 1px solid #E5E5E5;
  border-bottom: 1px solid #E5E5E5;
  padding: 15px 0;
  display: table;
  width: 100%;
  margin-bottom: 10px;
`;

const ProfileWrapper = styled.a`
  display: flex;
  color: #333;

  &:hover, &:focus {
    color: #333;
    outline: none;
  }

  @media (min-width: 992px) {
    padding: 0;
  }
`;

const NameBounder = styled.div`
  flex: 1;
  padding-left: 8px;
`;

const NameDiv = styled.div`
  margin: 5px 5px 3px 0;
  font-size: 13px;
  flex: 1;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const StatusOnlineDiv = styled.div`
  font-size: 11px;
  color: rgb(155, 155, 155);
  display: flex;
  align-items: center;
`;

const BaseBtn = styled.button`
  cursor: pointer;
  text-align: center;
  transition: background-color 200ms ease-in-out;
  font-size: 10px;
  width: max-content;
  border-radius: 20px;
  padding: 7px 10px;
  height: fit-content;

  &:active, &:focus{
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

const PrimaryButton = styled(BaseBtn)`
  background-color: #fe9900;
  color: #fff;
  border: none;

  &:hover {
    background-color: #feb700;
  }
`;

const SecondaryButton = styled(BaseBtn)`
  background-color: #fff;
  color: #fe9900;
  border: 1px solid #fe9900;

  &:hover {
    background-color: #e2e6ea;
  }
`;

const OnlineBullet = styled.span`
  font-size: 20px;
  color: ${props => props.online ? 'rgb(88, 159, 57)' : 'rgb(155, 155, 155)'};
  line-height: 21px;
  margin-right: 5px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  text-align: center;
  align-items: center;
  font-size: 12px;

  & > a {
    flex: 1;
  }
`;

const InfoItem = styled.div`
  flex: 1;

  & > p {
    font-size: 12px;
    color: rgb(155, 155, 155);
    margin-bottom: 5px;
  }
  & > span {
    color: #000;
    font-weight: 600;
  }
  & img {
    margin-right: 0px !important;
  }
`;

const SeperateLine = styled.div`
  border-left: 1px solid rgb(202,202,202);
  height: 20px;
  width: 1px;
`;

const ShopVerifiedWrapper = styled.div`
  padding: 0 0 0 60px;

  & span {
    font-size: 12px;
    color: rgb(155,155,155);
  }

  & img {
    margin-left: -6px;
    height: 26px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
`;

export {
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
}