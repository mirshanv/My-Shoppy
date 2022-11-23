
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ProductListing = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../images/flone.jpg")}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../images/theme.jpg")}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default ProductListing