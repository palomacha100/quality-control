import styled from "styled-components";
import { colors } from "../../utils/colors";
import { toRem } from "../../utils/toRem";

export const InputStyled = styled.input`
  display: flex;
  align-items: center;
  background-color: ${colors.whiteColor};
  cursor: pointer;
  margin: 0;
  border: 1px solid #808080;
  padding: 0 8px 0 8px;
  height: 36px;
  border-radius: 5px;
  color: #1a1a1a;
  font-family: "Lato";
  font-size: ${toRem(14)};
  font-weight: 400;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    height: ${toRem(50)};
    font-size: ${toRem(20)};
  }
`;

export const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  width: 10px;
  height: 0;
`;

export const CustomRadio = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid #808080;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    width: 11px;
    height: 11px;
    background-color: #1a1a1a;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }
  ${RadioInput}:checked + &::before {
    display: block;
  }
  ${RadioInput}:checked + & {
    border-color: #1a1a1a;
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  max-width: 100%;
  height: 36px;
`;
