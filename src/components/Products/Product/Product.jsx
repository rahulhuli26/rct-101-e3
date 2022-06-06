import React from "react";
import axios from "axios"

const Product = () => {
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    axios.get("http://localhost:8080/products").then((response) => {
      setProduct(response.data);
      console.log(response)
    });
    
  },[]);
  const product = { id: 1 };
  return (
    <div>
      {/* {Product.map((product)=>{ */}
       
         <div data-cy={`product-${product.id}`}>
         <h3 data-cy="product-name">{product.name}</h3>
         <h6 data-cy="product-description">{product.description}</h6>
         <button data-cy="product-add-item-to-cart-button">Add To Cart</button>
         <div>
           <button data-cy="product-increment-cart-item-count-button">count</button>
           <span data-cy="product-count">
             {
               // Count here from CartItems
             }
           </span>
           <button data-cy="product-decrement-cart-item-count-button"></button>
           <button data-cy="product-remove-cart-item-button"></button>
         </div>
       </div>

     
            {/* })} */}
    </div>
  );
};

export default Product;
