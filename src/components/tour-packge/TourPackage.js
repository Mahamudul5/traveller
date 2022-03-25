import React from 'react';
import SinglePackage from '../single-package/SinglePackage';


const TourPackage = () => {
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
    return (
        <div className=" row container">

            {
                tourPackages.map(tourPackage => <SinglePackage key={tourPackage.id}
                    tourPackage={tourPackage}
                ></SinglePackage>)
            }
        </div>
    );
};

export default TourPackage;