import {
    Card, CardNum, Deleted
  } from './Styled.jsx'
  
export default function DeletedCard({ post }) {
return (
    <Card>
        <CardNum>#{post.id}</CardNum>
        <Deleted>삭제된 제보입니다.</Deleted>
    </Card>
)
}