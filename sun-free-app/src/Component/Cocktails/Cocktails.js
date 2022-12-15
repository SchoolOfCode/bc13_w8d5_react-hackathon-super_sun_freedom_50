import React, { useState, useEffect } from "react";
//Lookup full cocktail details by ID
//make component function
export default function Cocktails({id}) {
  //top level of component useState
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    async function getCocktails() {
      const response = await fetch(
        `http://thecocktaildb.com/api/json/v1/1/random.php`
      );
      const data = await response.json();
      console.log(data);
      //setCocktail(data);
      setCocktail(data.drinks[0])
    }
    getCocktails(id);
  }, [id]);
  
  if (cocktail === null) {
     return <p>please wait</p>;
  } 
  return (
    <div>
      <h1 style={{ color: "white" }}>{cocktail.strDrink}</h1>
      <p style={{ color: "white" }}>It is {cocktail.strAlcoholic}!</p>
      <img
        style={{ width: "50%", borderRadius: "20px" }}
        src={cocktail.strDrinkThumb}
      ></img>
      <h2 style={{ color: "white" }}>{cocktail.strInstructions}</h2>
      <h2 style={{ color: "white" }}>Buon Appetito!</h2>
    </div>
  );
}
//create API fetch function
//return API data to render from the function
//export function