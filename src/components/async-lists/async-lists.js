import React, { useEffect, useState } from "react";
const foodLists = ['Hamburger', 'Pizza', 'Salad', 'Chicken'];

const fakeApiCall = () => new Promise((resolve) => {
setTimeout(resolve(foodLists), 2000) });

const AsyncList = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fakeApiCall()
            .then((data) => setFoods(data))
    }, [])
    
    return ( 
    <React.Fragment>
        {foods.map(elemento => <p key={elemento}>{elemento}</p>)}
    </React.Fragment> 
    );
}
 
export default AsyncList;