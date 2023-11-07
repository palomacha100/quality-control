import React from "react";
import { ButtonStyled } from "./ButtonStyled";
import Text from "../../micro/Text/Text";

const Button = ({ id, text, textId, onClick, type, disabled }) => {
  switch (id) {
    default:
      return (
        <ButtonStyled className={`${id}`} id={id} onClick={onClick} type={type} disabled={disabled}>
          <Text id={"TextoBotaoBranco"} text={`${text}`} />
        </ButtonStyled>
      );
    case "NoFillButtonSmall":
      return (
        <ButtonStyled className={`${id}`} id={id} onClick={onClick} type={type}>
          <Text id={"TextoBotaoPreto"} text={`${text}`} />
        </ButtonStyled>
      );
    case "NoFillButtonMedium":
      return (
        <ButtonStyled className={`${id}`} id={id} onClick={onClick} type={type}>
          <Text id={"TextoBotaoPreto"} text={`${text}`} />
        </ButtonStyled>
      );
    case "NoFillButtonLarge":
      return (
        <ButtonStyled className={`${id}`} id={id} onClick={onClick} type={type}>
          <Text id={"TextoBotaoPreto"} text={`${text}`} />
        </ButtonStyled>
      );
  }
};
export default Button;
