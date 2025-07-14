import React,{useState,useEffect} from 'react'
import { useFirebase } from '../context/Firebase'
import MyCard from '../components/MyCard';
import CardGroup from 'react-bootstrap/CardGroup'
function Home() {
    const firebase=useFirebase();
    const [books,setBooks]=useState([]);


    useEffect(()=>{
        firebase.listAllBooks().then(
            (books)=>setBooks(books.docs)
        )
    },[])


  return (
    <div className="container mt-5">
    <CardGroup>
     {
         books.map(book=>(
            <MyCard  id={book.id} {...book.data()}/>
         ))
     }
     </CardGroup>
    </div>
  )
}

export default Home
