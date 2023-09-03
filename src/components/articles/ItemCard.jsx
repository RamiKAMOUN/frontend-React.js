import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemCard = ({pr,index}) => {
  return (
    <div key={index}>
      <Card style={{ maxWidth: '18rem'}}>
      <Card.Img variant="top" src={pr.imageart} height={100} width={100}/>
      <Card.Body>
        <Card.Title>{pr.designation} </Card.Title>
        <Card.Text>
         {pr.prix}DT
        </Card.Text>
        <Button variant="primary">ADD TO CARD</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ItemCard
