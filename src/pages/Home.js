import React from 'react';

import CustomerReview from '../comps/home-comps/customerReview';
import GameCards from '../comps/home-comps/gameCards';


export default function Home () {
    return(
        <div>
            
            <h1>Home</h1>
            <CustomerReview/>
            <GameCards/>
            <GameCards/>
            

        </div>
    )
}