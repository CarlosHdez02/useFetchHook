import React from "react";
import { useFetch } from "./hooks/useFetch";
import SearchBar from "./components/SearchBar";



function App() {
  const {data } = useFetch()
  return <>
    <h1>Rick n Morty charactersss</h1>
    <SearchBar placeholder="Search your fav char" /> 
    <ul>
     {data.map((data)=> <li key={data.id}>
      <h1>{data.name}</h1>
      <img src={data.image} alt={data.name}/>
     </li>)}
    </ul>
  
  
    </>;
}

export default App;
