import React from 'react';
import {Card} from './Blocks/Card';
import {CardsWrapper, CardWrap} from "./styles";
import {products} from "../../data/productItemList";
import {uuid} from "../../halpers/uuid";

export const ProductList = () => {

    const renderCard = (item) => {
        return (
            <CardWrap key={uuid()}>
                <Card item={item}/>
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
