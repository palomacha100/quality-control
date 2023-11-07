import styled from "styled-components";
import { toRem } from "../../utils/toRem";
import { colors } from "../../utils/colors";

export const TextStyled = styled.span`
  font-family: "Lato";
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  line-height: 160%;
  font-style: normal;
  color: ${colors.textColor};
  margin: 0 !important;

  &.SubtituloScore {
    font-size: ${toRem(24)};
    font-weight: 600;
    color: #006273;
  }

  &.Titulo {
    font-size: ${toRem(32)};
    font-weight: 600;
  }
  &.TituloLogin {
    font-size: ${toRem(32)};
    font-weight: 600;
    color: ${colors.primaryColor};
  }

  &.Subtitulo {
    font-size: ${toRem(24)};
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: ${toRem(30)};
    }
  }

  &.TextoGrande {
    font-size: ${toRem(20)};
    font-weight: 400;
  }

  &.TextoGrandeBold {
    font-size: ${toRem(20)};
    font-weight: 700;
  }

  &.TextoCorrido {
    font-size: ${toRem(20)};
    font-weight: 400;
  }

  &.TextoCorridoBold {
    font-size: ${toRem(20)};
    font-weight: 700;
  }

  &.TextoCorridoBoldWhite {
    font-size: ${toRem(20)};
    font-weight: 700;
    color: #eaefee;
  }
  &.TextoMenor {
    font-size: ${toRem(14)};
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: ${toRem(20)};
    }
  }

  &.TextoMenorBold {
    font-size: ${toRem(14)};
    font-weight: 700;
      @media (max-width: 768px) {
        font-size: ${toRem(20)};
      }
  }

  &.TextoErro {
    font-size: ${toRem(12)};
    font-weight: 400;
    color: ${colors.errorColor};
    @media (max-width: 768px) {
        font-size: ${toRem(18)};
      }
  }

  &.TextoBotaoBranco {
    font-size: ${toRem(14)};
    font-weight: 700;
    color: #eaefee;
    @media (max-width: 768px) {
      font-size: ${toRem(20)};
    }
  }
  &.TextoBotaoPreto {
    font-size: ${toRem(14)};
    font-weight: 700;
    color: #1a1a1a;
  }
  &.Legenda {
    font-size: ${toRem(12)};
    font-weight: 400;
    color: ${colors.primaryColor}
    }
  
`;
