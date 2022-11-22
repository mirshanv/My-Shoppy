import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products);

    const RenderList = products.map((product) => {
        const { id, title, image, price, Category } = product;
        return (
            <div className="four column wide">
                <Link to={`/product/${id}`}>
                    <div className='ui link cards' key={id}>
                        <div className='card' >
                            <div className='image'>

                                <img src={image} alt={title} />
                            </div>
                            <div className='content'>
                                <div className='header'>
                                    {title}
                                </div>
                                <div className='meta price'>
                                    $ {price}
                                </div>
                                <div className='meta'>
                                    {Category}
                                </div>
                            </div>

                        </div >
                    </div >
                </Link>
            </div >
        )
    })

    return (
        <div className='row four column wide'>
            {RenderList}
        </div>
    )
}

export default ProductComponent