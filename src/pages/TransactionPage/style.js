import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export const Header = styled.header`
  width: 100%;
  height: 45px;
  display: flex;
  align-items:center;
  justify-content: center;
  margin-bottom: 40px;

  div{
    width: calc(100% - 50px);
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    color: ${({ theme }) => theme.titleColor};
    font-size: 26px;

    h1{
      font-style: normal;
      font-weight: 700;
      line-height: 31px;
    }

    svg {
      color: ${({ theme }) => theme.detailsColor};
    }
  }
`;
