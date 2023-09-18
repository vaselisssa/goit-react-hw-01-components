import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 24px auto 0 auto;
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FriendCard = styled.li`
  box-sizing: border-box;
  width: 100%;
  height: 120px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #f2eeed;
  box-shadow: 0px 5px 14px -2px rgba(0, 0, 0, 0.99);
`;

export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  height: 100%;
`;

export const FriendName = styled.p`
  font-size: 32px;
  font-weight: 700;
`;
