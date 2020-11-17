import React from 'react';
import {Ul, Li, A, Container, Logo} from './styles'
import logoImg from './logo.jpg'

function Nav (){
    const backgroundColor = '#000';
    const color = '#29b6f6';

    return (
        <Container>
            <Logo src={logoImg} alt='logo'/>
            <Ul bg={backgroundColor}>
                <Li><A href='/' color={color}>Home</A></Li>
                <Li><A href='#' color={color}>About Us</A></Li>
                <Li><A href='#' color={color}>Donate</A></Li>
            </Ul>
        </Container>
    )
}

export default Nav