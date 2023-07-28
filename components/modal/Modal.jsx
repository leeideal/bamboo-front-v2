import { Container, InstaFont, LogoImg, LogoText, ModalBtn, PageBtn, PageBtnProposal, PageFontawesomeIcon, PageInsta } from './Styled'
import logo from '../image/logo.png'
import { faPen, faComment, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from 'next/router';

export default function Modal({ modalOpenHandler }) {
    const router = useRouter()
    return(
        <Container>
            <ModalBtn onClick={modalOpenHandler}>
                X
            </ModalBtn>
            <LogoImg src={logo} alt='logo' />
            <LogoText>DGU-Bamboo</LogoText>
            <PageBtn href='/suggestion'>
                <PageFontawesomeIcon icon={faPen} />
                제보하기
            </PageBtn>
            <PageBtn href='/comment'>
                <PageFontawesomeIcon icon={faComment} />
                댓글달기
            </PageBtn>
            <PageBtnProposal href='/proposal'>
                <PageFontawesomeIcon icon={faPaperPlane} />
                건의하기
            </PageBtnProposal>
            <PageInsta onClick={()=>router.push('/dgu-bamboo-home')}>
                <InstaFont icon={faInstagram} />
                인스타 바로가기
            </PageInsta>
        </Container>
    )
}