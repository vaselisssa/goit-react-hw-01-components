import styled from '@emotion/styled';

export const UserProfile = styled.div`
  margin: 60px auto 0 auto;
  width: 360px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2eeed;
  box-shadow: 0px 5px 14px -2px rgba(0, 0, 0, 0.99);
`;

export const Description = styled.div`
  padding: 40px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 75%;
  height: 75%;
  border-radius: 50%;
  border: 1px solid #6e6a69;
`;

export const Name = styled.p`
  margin-top: 30px;
  font-size: 36px;
  font-weight: 700;
`;

export const UserInfo = styled.p`
  margin-top: 10px;
  font-size: 20px;
  color: #5e5152;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-top: 1px solid #8a8584;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #deced0;
`;

export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    border-right: 1px solid #8a8584;
  }
`;

export const StatsLabel = styled.span`
  display: flex;
  gap: 6px;
  align-items: center;
  color: #5e5152;
  font-size: 16px;
`;

export const StatsQuantity = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
