import React from 'react';
import logo from "components/image/logo.png"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  NavContainer,
  NavLogo,
  NavLogoImg,
  NavLogoText,
  NavBtn
} from './Styled.jsx'

export default function NavBar() {

  return (
    <NavContainer>
      <NavLogo>
        <NavLogoImg src={logo} alt='logo' width={25}/>
        <NavLogoText>DGU-Bamboo</NavLogoText>
      </NavLogo>
      <NavBtn icon={faBars}/>
    </NavContainer>
  );
}