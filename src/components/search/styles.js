import Styled from 'styled-components'

export const Div = Styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    margin:1em 0;
`

const Input = Styled.input`
    padding:.4em;
    width:30em;
    color:#000;
    text-align:center;
    outline:none;
    border-radius:5px;
    background:#f5f5f5;
    border:none;
    transition: background .5s ease;

    &:focus{
    background:#fff;
    }
`

export const BookContainer = Styled.article`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`

export const ImageSvg = Styled.img`
    margin-top:5em;
    min-width:2em;
    height:18em;
`

export default Input