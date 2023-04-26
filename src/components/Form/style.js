import styled from 'styled-components';

export const FormArea = styled.div`
  display: flex;
  width: calc(100% - 50px);
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input{
    width: 100%;
    height: 58px;
    margin-bottom: 13px;
    color: ${({ theme }) => theme.inputColor};
    padding-left: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    border-radius: 5px;
    outline: none;
    border: none;

    &::placeholder{
      color: ${({ theme }) => theme.inputColor};
    }
  }

  input[type="checkbox"]{
    width: 18px;
    margin-left: 20px;
    padding: 0;
    margin-bottom: 0;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.btnColor};
  }
  button{
    background-color: ${({ theme }) => theme.btnBgColor};
    color: ${({ theme }) => theme.btnColor};
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    border-radius: 5px;
    width: 100%;
    height: 46px;
    border: none;
    cursor: pointer;
  }
`;
