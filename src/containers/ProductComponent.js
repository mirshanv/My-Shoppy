import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products);

    const RenderList = products.map((product) => {
        const { id, title, image, price, Category } = product;
        return (
            <div className="four column wide" style={{ color: 'blue', height: 370 }}>
                {/* <Link to={`/product/${id}`}> */}
                < a href={`/product/${id}`}>
                    <div className='ui link cards' key={id}>
                        <div className='card' >
                            <div className='image'>
                                <img src={image} alt={title} style={{ height: 250 }} />
                            </div>
                            <div className='content'>
                                <div className='header' style={{ fontSize: 15, wordBreak: "break-word", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
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
                </a >
                {/* </Link> */}
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