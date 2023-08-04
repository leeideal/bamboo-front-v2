import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// nav
export const NavContainer = styled.div`
  margin: 5% ;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 3%;
  width: 80%;
  cursor: pointer;
`

export const NavLogoImg = styled(Image)`
`

export const NavLogoText = styled.span`
  color : #04C96B;
  font-weight: 700;
  font-size: 13px;
`

export const NavBtn = styled(FontAwesomeIcon)`
  cursor: pointer;
  width: 15px;
  color: black;
`

// footer
export const FooterContainer = styled.footer`
  padding: 15px 5%;
  width: 100%;
  background-color: #EEEDED;
  font-size: 10px;
  display: flex;
  flex-direction: column;
`

export const FooterDev = styled.span`
  color: #727272;
  padding: 1% 0;
`

export const FooterThanks = styled.span`
  color: #04c96b;
  padding: 1% 0;
`

export const FooterInsta = styled.span`
  display: flex;
  align-items: center;
  gap: 1%;
  padding-top: 3%;
  cursor: pointer;
`

export const FooterInstaImg = styled(FontAwesomeIcon)`
  color: black;
  width: 10px;
`

export const FooterRights = styled.span`
  color: #BBB;
  padding: 1% 0;
`