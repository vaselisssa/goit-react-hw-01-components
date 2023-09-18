import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  margin: 24px auto 0 auto;
  width: 360px;
  border-radius: 10px;
  background-color: #f2eeed;
  box-shadow: 0px 5px 14px -2px rgba(0, 0, 0, 0.99);
`;

export const Title = styled.h2`
  padding: 40px 0;
  text-align: center;
  font-size: 32px;
  text-transform: uppercase;
  color: #5e5152;
`;

export const StatList = styled.ul`
  width: 100%;
  height: 100px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  list-style-type: none;
`;

export const StatItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  &:first-of-type {
    border-bottom-left-radius: 10px;
  }
  &:last-of-type {
    border-bottom-right-radius: 10px;
  }
`;

export const StatLabel = styled.span`
  font-size: 20px;
`;

export const StatPercentage = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
