import React from 'react';
import './singlePackage.css'
import { GiSelfLove } from "react-icons/gi";
const SinglePackage = (props) => {
    const { handleAddToFav } = props;
    const { image, name, price, id, } = props.tourPackage;


    return (

        <div className='col-md-4'>
            <div className="card p-2 m-2 border">
                <img className='img-fluid ' src={image} alt="" />
                <h4>package Name:{name}</h4>
                <h5>tour Cost: {price}</h5>
                <p>package Id: {id}</p>
                <button className='btn btn-primary' onClick={() => handleAddToFav(props.tourPackage)}>Add to favourite <GiSelfLove /> </button>
            </div>
        </div>




    );
};

export default SinglePackage;