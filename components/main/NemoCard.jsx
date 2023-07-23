import { useRouter } from 'next/router.js'
import { 
  Card, CardNum, NemoTitle, NemoTime, NemoCnt
} from './Styled.jsx'

export default function NemoCard({ post }) {
  const router = useRouter()

  // 시간
  const date = post.created_at.split('T')
  const time = date[1].split('.')[0].split(':')[0]
  const ampm = time ? '오전' : '오후'
  return (
    <Card
      onClick={()=>{router.push(`suggestion/${post.id}`)}}
    >
      <CardNum>#{post.id}</CardNum>
      
      <NemoTime>
        {date[0]}
      </NemoTime>
      <NemoTitle>
        {ampm} {time}시 니모
      </NemoTitle>
      <NemoCnt>
        니모 {post.report_cnt}건
      </NemoCnt>
    </Card>
  )
}