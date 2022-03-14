import React from 'react';
import './Help.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPhone, faComment } from '@fortawesome/free-solid-svg-icons';


const Help = (props) => {
    const { name, favorite, price, image } = props.person;
    const shopCart = <FontAwesomeIcon icon={faShoppingCart} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const comment = <FontAwesomeIcon icon={faComment} />

    return (
        <div className='main-container'>
            <div className="item-container">
                <img className='item-img' src={image} alt="" srcset="" />
                <h3>Name : {name}</h3>
                <h3>Price : ${price} </h3>
                <h3>Favorite : {favorite}</h3>
                <button
                    onClick={() => props.handleButton(props.person)}
                    className='item-button'>{shopCart} Add To Cart</button>
                <p> {phone}   {comment}</p>
            </div>

        </div>
    );
};

export default Help;