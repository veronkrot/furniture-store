import styled from "styled-components";

export const Price = styled.span`
font-weight: bolder;
`

export const CardWrap = styled.div`
margin: 15px;
`

export const CardsWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`
export const CardImgWrapper = styled.div`
height: 320px;
width: 298px;
display: inline-block;
overflow: hidden;
`
export const CardImg = styled.img`
object-fit: cover;
height: 90%;
width: 100%;
transition: transform .2s;
display: inline-block;
overflow: hidden;

&:hover {
transform: scale(1.2);
}
`
