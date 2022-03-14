import React, { useEffect, useState } from 'react';
import Help from '../Help/Help';
import './Community.css';
import { addToDb, getStoredCart } from '../uitilities/fake';
import Cart from '../Cart/Cart';

const Community = () => {
    const [persons, setPersons] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('./public.JSON')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, [])

    useEffect(() => {
        if (persons.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                // console.log(key,setCarts[key]);
                const addedProduct = persons.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCarts(storedCart);
        }
    }, [persons])
    const handleButton = (product) => {

        const newCarts = [...carts, product];
        setCarts(newCarts);
        //save to local storage
        addToDb(product.key);
    }



    return (
        <div className='container'>
            <div className="showcase-container">
                {
                    persons.map(person => <Help
                        key={person.id}
                        person={person}
                        handleButton={handleButton}
                    ></Help>)
                }

            </div>
            <div className="cart-container">

                <Cart carts={carts}></Cart>
            </div>

        </div>
    );
};

export default Community;