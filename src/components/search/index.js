import React,{useEffect, useRef, useState} from 'react';
import Input,{Div,BookContainer, ImageSvg} from './styles';

//---------The book component--------
import Book from '../books/book';

//------This is the spinner to check if it's loading----
import HashLoader from "react-spinners/HashLoader";

//------------This is the svg img-------------
import notSearched from './img/startSearch.svg';

//---------This is to iterate any element--------
import theIterator from '../iterator-function/iterator';

function Searcher(){
    const [inputValue, setInputValue] = useState('')
    const [books, setBooks] = useState([])
    const [loader, setLoader] = useState(false)
    const refe = useRef()
    
    const hadlerInput = (e)=>{
        setInputValue(e.target.value)
    }

    useEffect(()=>{
    
            setTimeout(()=>{
                if(refe.current.value === inputValue){
                    try {
                        setLoader(true)
                        fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue.trim()}&key=AIzaSyBWC_5HzfU0vTYSGQ5ckhJchU16AbZ0BhY`)
                        .then(res => res.json())
                        .then(jso => setBooks(jso.items))
                        .then(()=>setLoader(false))
                        }
                    catch (err) {
                        console.log(err)
                    }}
                },600)
    },[inputValue])

    return (
        <>
            <Div>
                <Input onChange={hadlerInput} type='text' placeholder="Search your book" ref={refe}/>            
            </Div>
            {books 
                ? <BookContainer>
                    {loader
                        ? <HashLoader color={"#4fc3f7"} css='margin-top: 10em;'/> 
                        : theIterator(books,Book)}
                  </BookContainer> 
                : <BookContainer>
                    <ImageSvg src={notSearched} alt='searh'/>
                  </BookContainer> }
        </>
    )
}

export default Searcher
