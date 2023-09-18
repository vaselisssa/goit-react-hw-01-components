import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 360px;
  height: 50px;
  margin: 20px auto 60px auto;
  border-radius: 10px;
  border-collapse: collapse;
  background-color: #f2eeed;
  box-shadow: 0px 5px 14px -2px rgba(0, 0, 0, 0.99);
`;

export const TableHeader = styled.thead`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-collapse: collapse;
`;

export const Title = styled.th`
  height: 50px;
  text-align: center;
  background-color: #5e5152;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  &:first-of-type {
    border-top-left-radius: 10px;
  }
  &:last-of-type {
    border-top-right-radius: 10px;
  }
`;

export const TableRow = styled.tr`
  height: 50px;
  text-align: center;
  font-size: 14px;
  color: #5e5152;
  &:nth-of-type(even) {
    background-color: #deced0;
  }
  &:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #5e5152;
    color: #fff;
  }
`;

export const TableData = styled.td`
  border-left: 1px solid #8ba1a5;
  border-right: 1px solid #8ba1a5;
  border-radius: inherit;
  font-weight: 700;
`;
