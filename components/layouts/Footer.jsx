import React from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  FooterContainer,
  FooterDev,
  FooterThanks,
  FooterInsta,
  FooterInstaImg,
  FooterRights
} from './Styled.jsx'

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