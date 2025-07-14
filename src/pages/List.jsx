import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {useFirebase} from "../context/Firebase"

function List() {


    const firebase=useFirebase();
    const[name,setName]=useState('');
    const[isbnNumber,setIsbnNumber]=useState('');
    const[price,setPrice]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await firebase.handleCreateNewListing(
            name,isbnNumber,
            price
        )
    }

  return (
   <div className='container mt-5'>
       <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Enter Book Name</Form.Label>
        <Form.Control onChange={e=>setName(e.target.value)} value={name} type="text" placeholder="Enter book name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="isbn">
        <Form.Label>ISBN</Form.Label>
        <Form.Control onChange={e=>setIsbnNumber(e.target.value)} value={isbnNumber} type="text" placeholder="ISBN Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control onChange={e=>setPrice(e.target.value)} value={price} type="text" placeholder="enter price" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
       Create
      </Button>
    </Form>
    </div>
  )
}

export default List
