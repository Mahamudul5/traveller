import React from 'react';
import './addToFav.css'
import '../../App'

const AddToFav = ({ cart }) => {



    return (
        <div className='fav-part'>
            <div>
                {
                    cart.map((item) => <h6 key={item.id}>{item.name}</h6>)
                }
            </div>

            {/* <p>Favourite item:{cart.length}</p>  */}
            <button className='btn btn-primary mt-2 p-1'>choose one</button><br />
            <button className='btn btn-primary mt-2 p-1'>Clear all</button>
        </div>
    );
};

export default AddToFav;