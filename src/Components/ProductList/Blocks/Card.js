import React from 'react';
import {Card as CardComponent, Button} from 'react-bootstrap';
import {CardImg, Price, CardImgWrapper} from "../styles";

export const Card = ({item, callback}) => {
    return (
        <CardComponent style={{width: '300px'}}>
            <CardImgWrapper src={item.image}>
                <CardImg src={item.image} alt={item.name}/>
            </CardImgWrapper>
            <CardComponent.Body>
                <CardComponent.Title>{item.name}</CardComponent.Title>
                <CardComponent.Text>
                    {item.description}
                    <Price>{item.price}</Price>
                </CardComponent.Text>
                <Button variant="info" size="lg" block onClick={callback}>Add to Cart</Button>
            </CardComponent.Body>
        </CardComponent>
    )
}
