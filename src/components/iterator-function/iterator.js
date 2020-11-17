import React from 'react'

export default function theIterator(element,Iterate){
    return element.map(el => {
        return (el.volumeInfo.imageLinks === undefined 
                ? null 
                : <Iterate 
                    key={el.id}
                    image={el.volumeInfo.imageLinks.thumbnail}
                    title={el.volumeInfo.title} 
                    url={el.volumeInfo.canonicalVolumeLink} />)
})}