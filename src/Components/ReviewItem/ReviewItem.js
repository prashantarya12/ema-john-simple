import React from 'react';

const ReviewItem = (props) => {
    
    const {name, quantity,key,price} = props.product;
    const css ={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'

    };
    return (
        <div style={css}>
            <h4 className='product-name'>{name}</h4>
            <p>Quantity:{quantity}</p>
             <p><small>$ {price}</small></p>
            <br/>
            <button 
            className='button'
            onClick={() =>props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;