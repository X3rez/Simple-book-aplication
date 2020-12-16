import styled from 'styled-components'

export const Container = styled.div`
    background-color:#000;
    height:3em;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
export const Logo = styled.img`
    height:2.5em;
    margin-left:9%;
`
export const Ul = styled.ul`
    display:flex;
    justify-content:space-around;
    width:20em;
    max-width:85%;
    padding:.7em;

`
export const Li = styled.li`
    list-style:none;
`
export const A = styled.a`
    text-decoration:none;
    color:${({color}) => color};
`