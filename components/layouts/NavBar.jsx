import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from "components/image/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavContainer = styled.div`
  margin: 5% ;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 3%;
  width: 80%;
  cursor: pointer;
`

const NavLogoImg = styled(Image)`
`

const NavLogoText = styled.span`
  color : #04C96B;
  font-weight: 700;
  font-size: 13px;
`

const NavBtn = styled(FontAwesomeIcon)`
  cursor: pointer;
  width: 15px;
  color: black;
`

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