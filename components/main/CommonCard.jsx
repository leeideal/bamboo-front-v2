import { useRouter } from 'next/router.js'
import {
  Card, CardNum, CommonBottom, CommonMore, CommonTime, CommonTitle
} from './Styled.jsx'

export default function CommonCard({ post }) {

  const router = useRouter()
  return (
    <Card
      onClick={()=>{router.push(`suggestion/${post.id}`)}}
    >
      <CardNum>#{post.id}</CardNum>
      <CommonTitle>
        {post.title}
      </CommonTitle>
      <CommonBottom>
        <CommonTime>
          {post.created_at.split('T')[0]}
        </CommonTime>
        <CommonMore>
          더보기
        </CommonMore>
      </CommonBottom>
    </Card>
  )
}