import { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ProductCard from './ProductCard';



const ProductPage = () => {
    const [product, setProduct ] = useState([]);

    useEffect(()=> {
        fetch(`${window.location}`)
        .then((r)=> r.json())
        .then(data=> {
            setProduct(data)
        })
    },[])

function handleCart(product){
    fetch(`/addtocart/${product.id}`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify(product.id)
    }).then((r)=> r.json())
    .then(data => console.log(data))
}

    return (
        <div className="productpagecontainer">
            <div className="mainbox">
                <div className="detailscontainer">
                    <h1>{product.name}</h1>
                    <h3>Description:</h3>
                    <p>{product.desc}</p>
                    <h3>Color: {product.color}</h3>
                    <h3>Star Rating: </h3>
                    <button onClick={()=> handleCart(product)}>Add to Bag</button>
                    <h3>Shipping *</h3>
                </div>
                <div className="mainimagecontainer">
                    <img src={product.image} />
                </div>
                <div className="extraimagescontainer">
                    <img src={product.image}/>
                    <img src={product.backimage}/>
                </div>
            </div>
            <div className="reviewbox"></div>
            <div className="alsolikebox"></div>
        </div>
    )
}

export default ProductPage;