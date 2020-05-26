import React, {useState} from 'react';
import {Card as CardComponent, Button} from 'react-bootstrap';
import {CardImg, Price, CardImgWrapper} from "../styles";
import {itemsInCart} from "../../../halpers/itemsInCart";

export const Card = ({item}) => {
    const [selected, setSelected] = useState(false);
    const [btnText, setBtnText] = useState("Add to Cart");
    const addToCartHandleClick = (item) => {
        if (!selected) {
            setBtnText("Delete from Cart");
            setSelected(true);
            itemsInCart.push(item);
            console.log(itemsInCart);
        } else {
            setSelected(false);
            setBtnText("Add to Cart");
            itemsInCart.filter(el => el !== item);
            console.log(itemsInCart);
        }}

    return (
        <CardComponent style={{width: '300px'}} key={item.id}>
            <CardImgWrapper src={item.image}>
                <CardImg src={item.image} alt={item.name}/>
            </CardImgWrapper>
            <CardComponent.Body>
                <CardComponent.Title>{item.name}</CardComponent.Title>
                <CardComponent.Text>
                    {item.description}
                    <br />
                    <Price>{item.price}</Price>
                </CardComponent.Text>
                <Button variant="info" size="lg" block onClick={() => addToCartHandleClick(item)}>{btnText}</Button>
            </CardComponent.Body>
        </CardComponent>
    );
}
