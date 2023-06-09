import styled from 'styled-components';

export const Register = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 25px;
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.darkTextColor};
  align-items:center;
  div:nth-child(1){
    margin-right: 8px;
    color: ${({ theme }) => theme.lightTextColor};
  }
  div:nth-child(2){
    max-width: 120px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    a{
      text-decoration: none;
      color: ${({ theme }) => theme.darkTextColor};
    }
  }
  div:nth-child(3){
    display: inline-flex;
    position: absolute;
    right: 20px;
    color: ${({ theme, opColor }) => theme[opColor]};
  }
  div:nth-child(4){
    font-size: 10px;
    display: flex;
    position: absolute;
    right: 2px;
    color: ${({ theme }) => theme.lightTextColor};
    cursor: pointer;
  }
`;
