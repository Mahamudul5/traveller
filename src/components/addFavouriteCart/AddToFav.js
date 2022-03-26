import React from 'react';
import './addToFav.css'
import '../../App'
import ChooseOne from '../chooseOne/ChooseOne';

const AddToFav = ({ cart, clearAll, handleChooseForMe }) => {
    // const { clearAll } = props;
    // const { cart } = props.cart;
    console.log(cart);

    return (
        <div className='fav-part'>
            <div>
                {
                    cart.map((item) => <h6 key={item.id}>{item.name}</h6>)
                }
            </div>

            {/* <p>Favourite item:{cart.length}</p>  */}
            <button onClick={() => handleChooseForMe()} className='btn btn-primary mt-2 p-1'>choose one</button><br />
            <button onClick={clearAll} className='btn btn-primary mt-2 p-1'>Clear all</button>
            <ChooseOne cart={cart}></ChooseOne>
        </div>
    );
};

export default AddToFav;