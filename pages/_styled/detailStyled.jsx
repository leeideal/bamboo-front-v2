// 제보 상세 페이지
import styled from "styled-components";
import Image from "next/image";

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 100%;
    padding: 5% 0;
`

export const DetailType = styled.div`
    font-weight: 700;
    font-size: 15px;
    color: #A4A4A4;
    padding-left: 5%;
`

export const DetailContent = styled.div`
    width: 110%;
    background-color: #FFF;
    margin: 5% -5%;
    padding: 8% 5%;
`

export const DetailNumber = styled.div`
    font-weight: 500;
    font-size: 20px;
    letter-spacing: -0.3px;
    color: #04C96B;
    padding-left: 5%;
`

export const DetailDate = styled.div`
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.3px;
    color: #B6B6B6;
    padding: 5%;
`

export const DetailText = styled.div`
    padding: 2% 5%;

`

export const DetailCommentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 5%;
`

export const DetailCommentHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5%;
`

export const DetailCommentCount = styled.div`
    letter-spacing: -0.3px;
    color: #2B2B2B;
    font-weight: 600;
    font-size: 17px;
`

export const DetailCommentBtn = styled.button`
    background-color: #04C96BE0;
    border: none;
    border-radius: 15px;
    width: 30%;
    line-height: 28px;
    font-size: 12px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    cursor: pointer;
`

export const DetailComment = styled.div`
    background: #FFFFFF;
    border: 1px solid rgba(4, 201, 107, 0.35);
    border-radius: 20px;
    padding: 5% 7%;
    margin-bottom: 5%;
    width: 100%;
`

export const DetailCommentNum = styled.div`
    color: #04C96B;
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 1%;
`

export const DetailCommentImg = styled(Image)`
    width: 20px;
    height: 14px;
`

export const DetailCommentContent = styled.div`
    margin-top: 5%;
`