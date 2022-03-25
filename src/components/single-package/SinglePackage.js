import React from 'react';
import { GiSelfLove } from "react-icons/gi";

const SinglePackage = (props) => {
    console.log(props.tourPackage.name);
    const { image, name, price, id } = props.tourPackage;
    return (
        <div className='col-md-4'>
            <div className="card p-3 border">
                <img className='img-fluid ' src={image} alt="" />
                <h4>package Name:{name}</h4>
                <h5>tour Cost: {price}</h5>
                <p>package Id: {id}</p>
                <button className='btn btn-primary'>Add to favourite <GiSelfLove /> </button>
            </div>

        </div>

    );
};

export default SinglePackage;