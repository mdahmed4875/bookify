import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { useFirebase } from '../context/Firebase';
import Form from 'react-bootstrap/Form'


import Button from 'react-bootstrap/Button';

function Detail() {

const params=useParams();
const firebase=useFirebase();
const [data,setData]=useState(null);
const [qty,setQty]=useState(1);
console.log(data);
useEffect(()=>{
    firebase.getBookById(params.bookId)
    .then((value)=>{
        setData(value.data());
    })
},[])
const placeOrder=async ()=>{
    const result=await firebase.placeOrder(params.bookId,qty);
    console.log('plaed order',result)
}
if(data==null){
    return <h1>Loading....</h1>;
}
  return (
    <div className="container">
     <h1>{data.name}</h1>
     <h1>Details</h1>
     <p>Price: Rs. {data.price}</p>
     <p>ISBN Number: Rs. {data.isbn}</p>
     <h1>Owner Details</h1>
     <p>Name: {data.useremail}</p>
     <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>Quantity</Form.Label>
             <Form.Control onChange={e=>setQty(e.target.value)} value={qty} type="Number" placeholder="enter quantity" />
           </Form.Group>
     <Button onClick={placeOrder} variant="success">Buy Now</Button>
    </div>
  )
}

export default Detail
