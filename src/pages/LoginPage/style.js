import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  a{
    margin-top: 36px;
    color: ${({ theme }) => theme.linkColor};
    text-decoration: none;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
  }
`;
export const Logo = styled.h1`
  font-family: 'Saira Stencil One', cursive;
  color: ${({ theme }) => theme.titleColor};
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 50px;
  margin-bottom: 24px;
`;
