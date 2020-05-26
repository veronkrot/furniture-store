import React from "react";
import {itemsInCart} from "../../../halpers/itemsInCart";

export const CartPage = () => {
    return (
        <div>You have {itemsInCart.length} items in the cart!</div>
    )
}
