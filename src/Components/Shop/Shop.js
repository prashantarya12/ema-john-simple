import React, { useEffect, useState } from 'react';
import Css from './Shop.css';
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
   const[products, setProducts] = useState(fakeData);
   const [cart, setCart] = useState([])
    useEffect (() =>{
        const sevedCart = getDatabaseCart();
        const productKeys = Object.keys(sevedCart)
        const previousCart = productKeys.map(existingKey =>{
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = sevedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    },[]);

   const handleAddProduct = (product) =>{
       const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
    let count = 1 ;
    let newCart;
    if(sameProduct){
         count = sameProduct.quantity + 1;
        sameProduct.quantity = count;
        const others = cart.filter(pd => pd.key !== toBeAddedKey);
        newCart = [...others, sameProduct];
    }
    else{
        product.quantity = 1;
        newCart = [...cart, product];
    }
       setCart(newCart); 
       addToDatabaseCart(product.key, count);
   }
    return (
        <div className='twin-container'>
            <div className="product-container">  
                        {
                            products.map(pd =><Products
                                key ={pd.key}
                                showAddToCart={true}
                                 product={pd}
                                  handleAddProduct ={handleAddProduct}
                                  ></Products>)
                        }
            </div>
           <div className="cart-container">
               <Cart cart={cart}>
               <Link to='/review'>
                    <button className='button'>Review Ordered</button>
                </Link>
               </Cart>
           </div>
        </div>
    );
};

export default Shop;