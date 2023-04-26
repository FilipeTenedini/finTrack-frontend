import styled from 'styled-components';

export const TransactionsArea = styled.div`
  width: calc(100% - 10px);
  padding-top: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  color: blue;
  position: relative;

  &&::-webkit-scrollbar {
    display: none;
  }
`;
export const BalanceArea = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;

  div{
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: ${({ theme }) => theme.darkTextColor};
    padding-left: 10px;
  }
  p {
    text-align: end;
    padding-right:10px;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: ${({ color, theme }) => theme[color]};
  }
`;
