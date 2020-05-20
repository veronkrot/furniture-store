import React from "react";
import {LogoImg, LogoWrapper, StoreName} from "../styles";
import logo from "../../../img/logo.png"

export const StoreLogo = () => {
    return (
        <LogoWrapper>
            <LogoImg src={logo}/>
            <StoreName>Furniture Store</StoreName>
        </LogoWrapper>
    )
}
