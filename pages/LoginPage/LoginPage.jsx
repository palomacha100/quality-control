import React from "react";
import { LoginContainer, LoginContent, ButtonContainer, FormLogin } from "./LoginPageStyled"
import FormContent from "../../components/FormContent/FormContent"
import Button from "../../components/Button/Button"
import Image from "../../micro/Image/Image"

const Login = () => {
    return (
        <LoginContainer>
            <LoginContent>
                <FormLogin>
                    <FormContent label="Usuário" error="Digite um usuário válido"/>
                    <FormContent label="Senha" error="Digite uma senha válida"/>
                    <ButtonContainer>
                    <Button id="ButtonLarge" type="submit" text="Entrar"/>
                </ButtonContainer>
                </FormLogin>
                <Image width={300} height={200}/> 
            </LoginContent>
        </LoginContainer>
    )
}

export default Login