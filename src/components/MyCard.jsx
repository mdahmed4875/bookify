import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'


function MyCard(props) {
  const navigate=useNavigate();
  return (
    <Card style={{ width: '18rem' ,margin:"25px"}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
         This book has a title {props.name} and this book is sold by {props.displayName} and this book costs Rs.{props.price}
        </Card.Text>
        <Button onClick={e=>navigate(`/book/view/${props.id}`)} variant="primary">view</Button>
      </Card.Body>
    </Card>
  )
}

export default MyCard
