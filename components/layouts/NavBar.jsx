import React, { useState } from 'react';
import logo from "components/image/logo.png"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  NavContainer,
  NavLogo,
  NavLogoImg,
  NavLogoText,
  NavBtn
} from './Styled.jsx'
import Modal from '../modal/Modal.jsx';

export default function NavBar() {

  // 모달 오픈
  const [modalOpen, setModalOpen] = useState(false)

  const modalOpenHandler = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
    <NavContainer>
      <NavLogo>
        <NavLogoImg src={logo} alt='logo' width={25}/>
        <NavLogoText>DGU-Bamboo</NavLogoText>
      </NavLogo>
      <NavBtn icon={faBars} onClick={modalOpenHandler}/>
    </NavContainer>
    {modalOpen && <Modal modalOpenHandler={modalOpenHandler} />}
    </>
  );
}