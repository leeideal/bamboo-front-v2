import styled from "styled-components";

export default function Main(){
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