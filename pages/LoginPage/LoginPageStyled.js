import styled from "styled-components";
import { toRem } from "../../utils/toRem";
import { colors } from "../../utils/colors"

export const LoginContainer = styled.div`
    display: flex;
    height: 100vh;
    background-color: ${colors.lightColor};
    justify-content: center;
    align-items: center;
    
`
export const FormLogin = styled.form`
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
`

export const LoginContent = styled.div`
    display: flex;  
    flex-direction: row;
    height: ${toRem(230)};
    width: ${toRem(600)};
    background-color: ${colors.whiteColor};
    margin: auto;
    border-radius: 5px;
    padding: ${toRem(25)};
    gap: ${toRem(20)};
    justify-content: space-between;
    @media (max-width: 768px) {
      margin: 10px;
    }
`
export const ButtonContainer = styled.div`
    margin-top: ${toRem(20)}
`