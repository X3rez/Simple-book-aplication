import React from 'react';
import {Div, Image, Title, A} from './styles'

function Book ({image, title, url}){
        return(
            <A href={url} target='_blank'>
                <Div>
                    <Image src={image} title={title} alt='cover'/>
                    <Title title={title} alt='cover'>{title}</Title>
                </Div>  
            </A>         
        )
}

export default Book