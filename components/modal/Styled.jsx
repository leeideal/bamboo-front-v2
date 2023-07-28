import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
    position: absolute;
    width: 60%;
    padding: 5%;
    right: 0;
    border-radius: 10px 0px 0px 10px;
    z-index: 999;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
`

export const ModalBtn = styled.span`
    width: 5%;
    text-align: right;
    margin: 5% 0 5% 70%;
    color: rgba(27, 47, 78, 0.40);
    cursor: pointer;
`

export const LogoImg = styled(Image)`
    margin: 5% 0;
`

export const LogoText = styled.h1`
    font-size: 1em;
    font-family: 'InterBold';
    color : #04C96B;
    font-weight: 700;
    margin: 5% 0 15% 0;
`

export const PageBtn = styled(Link)`
    background-color: #04C96BE0;
    border: none;
    border-radius: 20px;
    width: 70%;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    font-size: 12px;
    color: #FFFFFF;
    margin: 5% 0;
    font-size: 15px;
    cursor: pointer;
`

export const PageBtnProposal = styled(Link)`
    background-color: #11472D4D;
    border: none;
    border-radius: 20px;
    width: 70%;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    color: #FFFFFF;
    margin: 5% 0 20% 0;
    font-size: 15px;
    cursor: pointer;
`

export const PageFontawesomeIcon = styled(FontAwesomeIcon)`
    width: 12px;
`

export const PageInsta = styled.button`
    border: 1px solid #04C96BE0;
    border-radius: 20px;
    width: 70%;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    font-size: 12px;
    color: #04C96BE0;
    margin: 15% 0 25% 0;
    font-size: 15px;
    cursor: pointer;
    background-color: transparent;
`

export const InstaFont = styled(FontAwesomeIcon)`
    width: 12px;
`