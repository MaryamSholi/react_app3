import React, {useState, useEffect}  from'react'
import Product from '../product/Product.jsx'

export default function Products() {
    let [products, setProducts] = useState([]);

    const getProducts = async()=>{
        let reponse = await fetch("https://fakestoreapi.com/products");
        let data = await reponse.json();
        setProducts(data);
    }

    useEffect(()=>{
        getProducts();
    },[])

    
  return (

   <div className='container py-5'>
      <div className='row row-gap-3 '>
         {
          products.map((product) =>{
            return <Product {...product} key={product.id} />

          })
         }
  
      </div>
    
    </div>

  
    
  )
}
