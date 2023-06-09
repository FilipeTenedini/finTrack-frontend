import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Header = styled.header`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;

  div{
    width: calc(100% - 50px);
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    color: ${({ theme }) => theme.titleColor};
    font-size: 18px;

    h1{
      font-style: normal;
      font-weight: 700;
      line-height: 31px;
    }

    svg {
      font-size: 26px;

      &:nth-child(2n){
        position: absolute;
        right: 70px;
      }
      &:nth-child(3n){
        color: ${({ theme }) => theme.detailsColor};
      }
    }
  }
`;
export const TransactionsContainer = styled.section`
  width: calc(100% - 50px);
  height: 400px;
  min-height: 400px;
  background-color: ${({ theme }) => theme.transactionsBgColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: ${({ movLength }) => movLength};
  align-items: center;
  position: relative;

  p{
    max-width: 280px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
  }
`;

export const ButtonsContainer = styled.section`
  width: calc(100% - 50px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  a{
    text-decoration: none;
    font-style: none;
    width: 100%;
    height: 100px;
    cursor: pointer;

  }
  button {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 5px;
    position: relative;
    background-color: ${({ theme }) => theme.btnBgColor};
    color: ${({ theme }) => theme.btnColor};
    cursor: pointer;

    svg{
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 22px;
      color: ${({ theme }) => theme.detailsColor};
    }
    p {
      position: absolute;
      font-size: 18px;
      bottom: 10px;
      left: 10px;
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      line-height: 20px;
    }
}
`;
