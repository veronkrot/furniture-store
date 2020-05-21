import React from 'react';
import {Card} from './Blocks/Card';
import {CardsWrapper, CardWrap} from "./styles";
import {products} from "../../data/productItemList";

export const ProductList = () => {
    const addToCart = (item) => {
        console.log(item)
    }

    const renderCard = (item) => {
        return(
            <CardWrap>
                <Card item={item} callback={addToCart} key={item.id}/>
            </CardWrap>
            )
    }
    return (
    <CardsWrapper>
           {
           products.map(el => renderCard(el))
       }
    </CardsWrapper>
    )
}