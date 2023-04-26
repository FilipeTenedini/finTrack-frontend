import styled from 'styled-components';

export const Register = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 25px;
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.darkTextColor};

  div:nth-child(1){
    margin-right: 8px;
    color: ${({ theme }) => theme.lightTextColor};
  }

  div:nth-child(3){
    display: inline-flex;
    position: absolute;
    right: 1px;
    color: ${({ theme, opColor }) => theme[opColor]};
  }
`;
