import React from 'react';
import { StyledImage } from './ImageStyled';
import Logo from "../../assets/logo.png";

const ImageComponent = ({width, height}) => {
    return <StyledImage src={Logo} alt="Logomarca" width={width} height={height} />;
};

export default ImageComponent;