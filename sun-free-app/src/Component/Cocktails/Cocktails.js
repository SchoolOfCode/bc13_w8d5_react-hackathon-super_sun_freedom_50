import React, { useState, useEffect } from "react";
//Lookup full cocktail details by ID
//make component function
export default function Cocktails() {
  //top level of component useState
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    async function getCocktails() {
      const response = await fetch(
        `http://thecocktaildb.com/api/json/v1/1/random.php`
      );
      const data = await response.json();
      console.log(data);
      setCocktail();
    }
    getCocktails();
  }, []);
  
  return <div>
    <h2>{cocktail}</h2>
  </div>;
}
//create API fetch function
//return API data to render from the function
//export function