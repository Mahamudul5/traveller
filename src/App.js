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
      <div className="d-flex div-main">
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
          <Accordion.Header>How react works?</Accordion.Header>
          <Accordion.Body>
            React is a declarative js libray for web ui.React has many kind of components.React has virtual dom to change real dom.We use react components to do what we want to see in Ui.react efficiently update with rerender our expected conponents. <a href='https://www.google.com/search?q=how+react+works&oq=&aqs=chrome.0.69i59i450l8.506091334j0j7&sourceid=chrome&ie=UTF-8'>read more</a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How use State works?</Accordion.Header>
          <Accordion.Body>
            usestate declears "state variable".It,s preserve value by calling function.And the state variablesa preservew by react.Only arguments hook in the initial state.We can keep a number or string that we needed.Use state returns a state and a function that update the state.Sometimes we be wonders becouse why usestate not to call create state. <a href='https://reactjs.org/docs/hooks-state.html'>read more.</a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default App;
