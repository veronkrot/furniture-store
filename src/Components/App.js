import React, {useState} from 'react';
import {Header} from "./Header";
import {HomePage} from "./Pages/Home";
import {pages} from "../halpers/pages";
import {CartPage} from "./Pages/Cart";

function App() {
    let [page, setPage] = useState(pages.home);

    const pageHandleClick = (page) => {
        if (page === pages.home) {
            return <HomePage/>
        } else return <CartPage/>
    }

    return (
        <div className="App">
            <Header home={() => setPage(pages.home)}
                    cart={() => setPage(pages.cart)}
            />
            {pageHandleClick(page)}
        </div>
    );
}

export default App;
