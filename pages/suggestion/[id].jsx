import { DetailCommentContainer, DetailCommentCount, DetailCommentNum, DetailContainer, DetailContent, DetailDate, DetailNumber, DetailText, DetailType, DetailCommentHeader, DetailCommentBtn, DetailComment, DetailCommentImg, DetailCommentContent, DetailDateNemo } from "../_styled/detailStyled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import logo from '../../components/image/logo.png'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SuggestionDetail() {

  const router = useRouter()
  
  const [post, setPost] = useState()
  const [comments, setComments] = useState([])

  useEffect(()=>{
    fetchPost()
    fetchComments()
  },[])

  const fetchPost = async () => {
    try {
      // dummy
      const dummy = 
        {  
          "id": 1,
          "title": "피곤해",
          "type": "NEMO",
          "is_student": true,
          "created_at": "2023-12-25T07:47:07.687842+09:00",
          "report_cnt": 1,
          "is_deleted": false,
        }
      
      setPost(dummy)
      console.log(post)
    } catch (e) {
      console.log(e)
    }
  }

  const fetchComments = async () => {
    try {
      // dummy
      const dummy = [
        {  
          "id": 1,
          "content": "댓글이냐?",
          "is_student": true,
          "created_at": "2023-12-25T07:47:07.687842+09:00",
        },
        {  
          "id": 2,
          "content": "댓글이다",
          "is_student": false,
          "created_at": "2023-12-25T07:47:07.687842+09:00",
        },
      ]
      setComments(dummy)
    } catch (e) {
      console.log(e)
    }
  }

  // 니모 시간
  const date = post?.created_at.split('T')[1].split('.')[0].split(':')[0]
  const formattedDate = date ? parseInt(date, 10) : ''
  // console.log(date[0])
  // const time = date[1].split('.')[0].split(':')[0]
  // const ampm = time ? '오전' : '오후'
  

  const nemoTitleDate = (
    <DetailDateNemo>
      {formattedDate < 12 ?
        <>오전 {formattedDate}시 니모</> 
        :
        <>오후 {formattedDate-12}시 니모</>
      }
    </DetailDateNemo>
  )
  
  return (
    <DetailContainer>
      <DetailType>
        {post?.type === "COMMON" ? "🎋 일반제보": "🐠 니모를 찾아서"}
      </DetailType>

      <DetailContent>
        <DetailNumber>#{post?.id}번째 뿌우</DetailNumber>
        <DetailDate>
          {post?.created_at.split('T')[0] + " "}
          {post?.type === "COMMON" ?
            <>{post.created_at.split('T')[1].substr(0,5)}</>
            :
            <>{nemoTitleDate}</>
          }
        </DetailDate>

        <DetailText>{post?.title}</DetailText>
      </DetailContent>

      <DetailCommentContainer>

        <DetailCommentHeader>
          <DetailCommentCount>댓글 {comments.length}</DetailCommentCount>
          <DetailCommentBtn
            onClick={()=>router.push(`/comment`)}
          >
            <FontAwesomeIcon icon={faMessage} width={12}/>
            댓글달기
          </DetailCommentBtn>
        </DetailCommentHeader>

        {comments.map((comment)=>(
          <DetailComment key={comment.id}>
            <DetailCommentNum>
              댓글{comment.id}
              {comment.is_student && <DetailCommentImg src={logo} alt='img'/>}
            </DetailCommentNum>
            <DetailCommentContent>
              {comment.content}
            </DetailCommentContent>
          </DetailComment>
        ))}
        
      </DetailCommentContainer>
    </DetailContainer>
  )
}