import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { 
  SearchBtn,
  SearchContainer,
  SearchText
} from './Styled.jsx'

export default function Search() {
    
  return (
    <SearchContainer>
      <SearchText>
        검색어를 입력해주세요
      </SearchText>
      <SearchBtn icon={faSearch} />
    </SearchContainer>
  )
}