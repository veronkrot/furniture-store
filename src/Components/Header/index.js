import React from "react";
import {HeaderWrapper, Nav, NavItem} from "./styles";
import {StoreLogo} from "./Blocks/Logo";

export const Header = ({home, cart, shopping}) => {
    return (
        <HeaderWrapper>
            <StoreLogo />
            <Nav>
                <NavItem href="#" onClick={home}>
                    Home
                </NavItem>
                <NavItem href="#" onClick={cart}>
                    Cart {shopping}
                </NavItem>
            </Nav>
        </HeaderWrapper>
    )
}
