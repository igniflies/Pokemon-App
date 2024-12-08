import Axios from "axios";
import './App.css';
import {useState} from "react";

function App() {
  const[pokemonname,setpokemonname] =useState({name:"",
    species:"",
    
    img:"",
    hp:"",
        attack:"",defense:"",type:""
      });
  const [pokemonchoosen,setpokemonchoosen]=useState(false);
  const[pokemon,setpokemon] =useState({});
  const searchpokemon=()=>{
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`).then((response)=>{
      setpokemon({name:pokemonname,species:response.data.species.name, img:response.data.sprites.front_default,hp:response.data.stats[0].base_stat,
        attack:response.data.stats[1].base_stat,defense:response.data.stats[2].base_stat,type:response.data.types[0].type.name
      })
    })
    setpokemonchoosen(true);
    


  }
  return (
    <div className="App">
      <div className="title-section">
        <h1>Pokemon Stats</h1>
        <input type="text" onChange={(event)=>(setpokemonname(event.target.value))}/>
        <button onClick = {searchpokemon}>Search Pokemon</button>
      </div>
      <div className="display-section">{!pokemonchoosen?(<h1>Please Choose a Pokemon</h1>): (
        <>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.img}/>
        <h3>species: {pokemon.species}</h3>
        <h3>Type: {pokemon.type}</h3>
        <h4>: Hp {pokemon.hp}</h4>
        <h4>Attack: {pokemon.attack}</h4>
        <h4>Defense: {pokemon.defense}</h4>

        </>
        )}

      </div>
      
    </div>
  );
}

export default App;
