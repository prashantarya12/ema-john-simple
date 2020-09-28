import React from 'react';
import Css from './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Products = (props) => {

 const {name,img,price,stock,seller,key} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className='product-name'><Link to={'/product/'+key}>{name}</Link></h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>$: {price}</p>
                <p><small>only {stock} left in stock-order soon.</small></p>
               { props.showAddToCart && <button
                 className='button' 
                 onClick={() => props.handleAddProduct(props.product)}>
                     <FontAwesomeIcon icon={faShoppingCart}/> add to cart
                </button>}
            </div>
        </div>
    );
};

export default Products;