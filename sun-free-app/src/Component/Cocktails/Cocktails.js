import React, { useState, useEffect } from "react";
//Lookup full cocktail details by ID
//make component function
export default function Cocktails({id}) {
  //top level of component useState
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    async function getCocktails() {
      const response = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/lookup.php?iid=552`
      );
      const data = await response.json();
      console.log(data);
      setCocktail(data);
    }
    getCocktails(id);
  }, [id]);
  
  return <div>
    <h2 style={{color: "white"}}>istructions:{cocktail.instructions}</h2>
  </div>;
}
//create API fetch function
//return API data to render from the function
//export function