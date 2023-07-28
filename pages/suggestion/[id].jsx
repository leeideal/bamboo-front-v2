import { DetailCommentContainer, DetailCommentCount, DetailCommentNum, DetailContainer, DetailContent, DetailDate, DetailNumber, DetailText, DetailType, DetailCommentHeader, DetailCommentBtn, DetailComment, DetailCommentImg, DetailCommentContent } from "../_styled/detailStyled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import logo from '../../components/image/logo.png'
import { useRouter } from "next/router";

export default function SuggestionDetail() {

  const router = useRouter()

  return (
    <DetailContainer>
      <DetailType>일반 제보</DetailType>

      <DetailContent>
        <DetailNumber>#1번째 뿌우</DetailNumber>
        <DetailDate>2023-05-10 16:43</DetailDate>
        
        <DetailText>어쩌구 그 분 찾아요!어쩌구 그 분 찾아요!어쩌구 그 분 찾아요!어쩌구 그 분 찾</DetailText>
      </DetailContent>

      <DetailCommentContainer>

        <DetailCommentHeader>
          <DetailCommentCount>댓글 2</DetailCommentCount>
          <DetailCommentBtn
            onClick={()=>router.push(`/comment`)}
          >
            <FontAwesomeIcon icon={faMessage} width={12}/>
            댓글달기
          </DetailCommentBtn>
        </DetailCommentHeader>

        <DetailComment>
          <DetailCommentNum>
            댓글1
            <DetailCommentImg src={logo} />
          </DetailCommentNum>
          <DetailCommentContent>
            여기가 댓글이야 여기
          </DetailCommentContent>
        </DetailComment>

        <DetailComment>
          <DetailCommentNum>
            댓글1
            <DetailCommentImg src={logo} />
          </DetailCommentNum>
          <DetailCommentContent>
            여기가 댓글이야 여기
          </DetailCommentContent>
        </DetailComment>

      </DetailCommentContainer>
    </DetailContainer>
  )
}