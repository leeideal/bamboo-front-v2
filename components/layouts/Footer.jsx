import React from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
  padding: 15px 5%;
  width: 100%;
  background-color: #EEEDED;
  font-size: 10px;
  display: flex;
  flex-direction: column;
`

const FooterDev = styled.span`
  color: #727272;
  padding: 1% 0;
`

const FooterThanks = styled.span`
  color: #04c96b;
  padding: 1% 0;
`

const FooterInsta = styled.span`
  display: flex;
  align-items: center;
  gap: 1%;
  padding: 3% 0 0 0;
  cursor: pointer;
`

const FooterInstaImg = styled(FontAwesomeIcon)`
  color: black;
  width: 10px;
`

const FooterRights = styled.span`
  color: #BBB;
  padding: 1% 0;
`

export default function Footer(){
  const router = useRouter();

  return(
    <FooterContainer>
      <FooterDev>Developed by 동국대학교 대나무숲 팀</FooterDev>
      <FooterThanks>special thanks to @cho1n</FooterThanks>
      <FooterInsta onClick={()=>router.push('/dgu-bamboo-home')}>
        <FooterInstaImg icon={faInstagram} />
        <FooterDev>@dgu_bamboo</FooterDev>
      </FooterInsta>
      <FooterRights>©DGU-Bamboo. All rights reserved.</FooterRights>
    </FooterContainer>
  )
}