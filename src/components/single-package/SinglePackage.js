import React from 'react';

const SinglePackage = (props) => {
    console.log(props.tourPackage.name);

    return (
        <div>

            <h1>{props.tourPackage.name}</h1>
            <p>{props.tourPackage.price}</p>
            <img src={props.tourPackage.image} alt="" />
        </div>
    );
};

export default SinglePackage;