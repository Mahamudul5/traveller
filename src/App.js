import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SinglePackage from './components/single-package/SinglePackage';
import AddToFav from './components/addFavouriteCart/AddToFav';
import { Accordion } from 'react-bootstrap';
import { useState } from 'react';

// import AddToFav from './components/addFavouriteCart/AddToFav'; 

function App() {
  const tourPackages = [


    { id: 1, name: 'coxBazar_7_days', price: 7000, image: '../images/coxBazar.jpg' },
    { id: 2, name: 'saintMartain_3_days', price: 5000, image: '../images/saintmartain.jpg' },
    { id: 3, name: 'bandorban_5_days', price: 6500, image: '../images/bandorban.jpg' },
    { id: 4, name: 'sundorban_3_days', price: 10000, image: '../images/sundorban.jpg' },
    { id: 5, name: 'rangamati_2_days', price: 3500, image: '../images/rangamati.jpg' },
    { id: 6, name: 'jaflong_1_days', price: 6500, image: '../images/jaflong.jpg' },
    { id: 7, name: 'darjeeling_5_days', price: 15000, image: '../images/darjeeling.jpg' },
    { id: 8, name: 'nepal_11_days', price: 12000, image: '../images/nepal.jpg' },
    { id: 9, name: 'sikkim_6_days', price: 9000, image: '../images/sikkim.jpg' },
  ]
  // console.log(tourPackages);
  const [cart, setCart] = useState([]);
  const handleAddToFav = (tourPackage) => {
    const newCart = [...cart, tourPackage]
    setCart(newCart);
    console.log(cart);
  }
  // console.log(props);
  const clearAll = () => {
    setCart([]);
  }


  return (
    <div className="App">

      {/* <div>
        {
          cart.map((item => <AddToFav item={item.name} key={item.id}></AddToFav>))
        }
      </div> */}

      <h1>Welcome to Travel with MH</h1>
      <div className="d-flex">
        <div className="container row">
          {
            tourPackages.map(tourPackage =>
              <SinglePackage tourPackage={tourPackage} key={tourPackage.id}
                handleAddToFav={handleAddToFav}
              ></SinglePackage>)
          }
        </div>
        <AddToFav cart={cart} clearAll={clearAll}></AddToFav>
      </div>


      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default App;
