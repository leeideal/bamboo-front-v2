import { useState, useEffect } from "react";
import styled from "styled-components";
import { 
  TypeContainer,
  Type,
  CardContainer,
  SuggestionBtn,
  Suggestion,
  SuggestionFont
} from './_styled/mainStyled.jsx'
import Search from "../components/main/search.jsx"
import NemoCard from "../components/main/NemoCard.jsx";
import CommonCard from "../components/main/CommonCard.jsx";
import DeletedCard from "@/components/main/DeletedCard.jsx";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router.js";

export default function Main(){

  // type 
  const [currentType, setCurrentType] = useState('ALL')
  const types = [
    {
      type: 'ALL',
      content: '전체'
    },
    {
      type: 'COMMON',
      content: '일반'
    },
    {
      type: 'NEMO',
      content: '니모'
    },
  ]
  const selectTypeHandler = (type) => {
    setCurrentType(type)
  }

  const [posts, setPosts] = useState([])
  const fetchPosts = async() => {
    try{
      // dummy
      const dummy = [
        {  
          "id": 1,
          "title": "피곤해",
          "type": "COMMON",
          "is_student": true,
          "created_at": "2023-12-25T07:47:07.687842+09:00",
          "report_cnt": 1,
          "is_deleted": false,
        },
        {
          "id": 2,
          "title": "2023년 12월 25일 오후 7시 니모",
          "type": "NEMO",
          "is_student": false,
          "created_at": "2023-12-25T07:47:07.687842+09:00",
          "report_cnt": 10000,
          "is_deleted": false,
        },
        {
          "id": 3,
          "title": "2023년 12월 25일 오후 7시 니모",
          "type": "NEMO",
          "is_student": false,
          "created_at": "2023-12-25T07:47:07.687842+09:00",
          "report_cnt": 10000,
          "is_deleted": true,
        },
        {  
          "id": 4,
          "title": "나는 멍청하다하하",
          "type": "COMMON",
          "is_student": true,
          "created_at": "2023-12-25T07:47:07.687842+09:00",
          "report_cnt": 1,
          "is_deleted": false,
        },
        {
          "id": 5,
          "title": "2023년 12월 25일 오후 7시 니모",
          "type": "NEMO",
          "is_student": false,
          "created_at": "2023-12-25T07:47:07.687842+09:00",
          "report_cnt": 10000,
          "is_deleted": false,
        },
      ]

      setPosts(dummy)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(()=>{
    fetchPosts()
  },[])

  const router = useRouter()

  return(
    <>
      <Search />

      <TypeContainer>
      {types.map((type, idx) => (
          <Type
          key={idx}
          onClick={()=>selectTypeHandler(type.type)}
          isSelected={type.type===currentType}
        >
          {type.content}
        </Type>
      ))}
    </TypeContainer>

    <Suggestion>
      <SuggestionBtn
        onClick={()=>{router.push(`suggestion`)}}
      >
        <SuggestionFont icon={faPen}/>
        제보하기
      </SuggestionBtn>
    </Suggestion>

    <CardContainer>
      {posts.map((post)=>(
        post.is_deleted === true ? (
          <DeletedCard 
            key={post.id}
            post={post}
          />
        ) : (
          post.type === 'COMMON' ? (
            <CommonCard 
              key={post.id}
              post={post}
            />
          ) : (
            <NemoCard 
              key={post.id}
              post={post}
            />
          )
        )
        
      ))}

    </CardContainer>

    </>
  )
}