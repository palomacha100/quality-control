import styled from "styled-components";
import { toRem } from "../../utils/toRem";
import { colors } from "../../utils/colors";

export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  border-radius: ${toRem(4)};
  padding: ${toRem(0)} ${toRem(16)};

  &.ButtonSmall {
    min-width: ${toRem(80)};
    height: ${toRem(24)};
    background-color: ${colors.secondaryColor};
  }
  &.ButtonMedium {
    min-width: ${toRem(88)};
    height: ${toRem(32)};
    background-color: ${colors.secondaryColor};
  }
  &.ButtonLarge {
    min-width: 100%;
    height: ${toRem(40)};
    background-color: ${colors.secondaryColor};
    @media (max-width: 768px) {
      height: ${toRem(50)};
    }
  }
  &.ButtonSmall:hover,
  &.ButtonMedium:hover,
  &.ButtonLarge:hover   
  {
    background-color: ${colors.blueHoverColor};
  }

  &.ButtonSmallRed {
    min-width: ${toRem(80)};
    height: ${toRem(24)};
    background-color: ${colors.errorColor};
  }
  &.ButtonMediumRed {
    min-width: ${toRem(88)};
    height: ${toRem(32)};
    background-color: ${colors.errorColor};
  }
  &.ButtonLargeRed {
    max-width: ${toRem(126)};
    height: ${toRem(40)};
    background-color: ${colors.errorColor};
  }
  &.ButtonSmallRed:hover,
  &.ButtonMediumRed:hover,
  &.ButtonLargeRed:hover {
    background-color: ${colors.redHoverColor};
  }
  &.NoFillButtonSmall {
    min-width: ${toRem(80)};
    height: ${toRem(24)};
    background-color: transparent;
  }
  &.NoFillButtonMedium {
    min-width: ${toRem(88)};
    height: ${toRem(32)};
    background-color: transparent;
  }
  &.NoFillButtonLarge {
    min-width: ${toRem(126)};
    height: ${toRem(40)};
    background-color: transparent;
  }

  &.DisabledButtonSmall {
    min-width: ${toRem(80)};
    height: ${toRem(24)};
    background-color: ${colors.disableColor};
    cursor: not-allowed;
  }
  &.DisabledButtonMedium {
    min-width: ${toRem(88)};
    height: ${toRem(32)};
    background-color: ${colors.disableColor};
    cursor: not-allowed;
  }
  &.DisabledButtonLarge {
    min-width: ${toRem(126)};
    height: ${toRem(40)};
    background-color: ${colors.disableColor};
    cursor: not-allowed;
    @media (max-width: 768px) {
      height: ${toRem(50)};
    }
  }

&.GreenButton {
  min-width: ${toRem(80)};
    height: ${toRem(24)};
    background-color:${colors.matchingColor};
    @media (max-width: 768px) {
      height: ${toRem(50)};
    }
  }
`;