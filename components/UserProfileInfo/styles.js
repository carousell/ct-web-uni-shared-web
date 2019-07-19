import styled from 'styled-components';

const UserProfileInfoWrapper = styled.div`
  border-top: 1px solid #E5E5E5;
  border-bottom: 1px solid #E5E5E5;
  padding: 15px 0;

  display: table;
  width: 100%;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 992px) {
    padding: 0;
  }
`;

const NameBounder = styled.div`
  flex: 1;
  padding-left: 10px;
`;

const NameDiv = styled.div`
  margin-bottom: 3px;
`;

const StatusOnlineDiv = styled.div`
  font-size: 11px;
  color: rgb(155, 155, 155);
  display: flex;
  align-items: center;
`;

const PrimaryButton = styled.button`
  background-color: #fe9900;
  color: #fff;
  cursor: pointer;
  padding: 7px 10px;
  text-align: center;
  transition: background-color 200ms ease-in-out;
  border: none;
  border-radius: 20px;
  font-size: 12px;

  &:hover {
    background-color: #feb700;
  }
`;

const SecondaryButton = styled.button`
  background-color: #fff;
  color: #fe9900;
  border: 1px solid #fe9900;
  cursor: pointer;
  padding: 7px 10px;
  text-align: center;
  transition: background-color 200ms ease-in-out;
  border-radius: 20px;
  font-size: 12px;

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
}