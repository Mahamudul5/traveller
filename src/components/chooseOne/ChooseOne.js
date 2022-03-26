import React from 'react';

const ChooseOne = ({ cart }) => {
    const { name, image } = cart;
    return (
        <div>
            <h1>this is me</h1>
            <img src={image} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default ChooseOne;