import styled from 'styled-components'

export const Div = styled.div`
        background:#fff;
        width:8em;
        border:1px solid #ECDBFF;
        margin:1em;
        text-align: center;
        transition: box-shadow .2s ease;
        border-radius:5px;
        &:hover{
            cursor: pointer;
            box-shadow:1px 1px 10px rgba(0,0,0,.3);      
        }
`

export const Image = styled.img`
       height:11em;
       width:100%;
       border-bottom:2px solid gray;
`
export const A = styled.a`
        text-decoration:none;
        color:#000;

`

export const Title = styled.h2`
    font-size:14px;
    margin-left:5px;
    text-align:center;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    transition:color .4s ease;
    &:hover{
        color:#29b6f6;
    }
`