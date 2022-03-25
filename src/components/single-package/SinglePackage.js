import React from 'react';
import { GiSelfLove } from "react-icons/gi";

const SinglePackage = (props) => {
    console.log(props.tourPackage.name);

    return (
        <div className='col-md-4'>
            <div className="card p-3 border">
                <img className='img-fluid ' src={props.tourPackage.image} alt="" />
                <h4>{props.tourPackage.name}</h4>
                <h5>tourCost:{props.tourPackage.price}</h5>
                <p>packageId:{props.tourPackage.id}</p>
                <button className='btn btn-primary'>Add to favourite <GiSelfLove /> </button>
            </div>

        </div>

    );
};

export default SinglePackage;