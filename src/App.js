import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  const [searchId, setSearchId] = useState("");
  const [namePokemon, setNamePokemon] = useState("");

  console.log(pokemons[3].name.english.toUpperCase());

  return (
    <>
      <GlobalStyle />
      <Header
        searchId={searchId}
        namePokemon={namePokemon}
        setSearchId={setSearchId}
        setNamePokemon={setNamePokemon}
      />
      <CardsContainer>
        {pokemons
          .filter((pokemon) => {
            if (pokemon.id.includes(searchId)) {
              return pokemon;
            } else if (!searchId) {
              return pokemons;
            }
          })
          .filter((pokemon) => {
            if (
              pokemon.name.english
                .toUpperCase()
                .includes(namePokemon.toUpperCase())
            ) {
              return pokemon;
            } else if (!namePokemon) {
              return pokemons;
            }
          })
          .map((pokemon) => {
            return (
              <PokemonCard
                cardColor={getColors(pokemon.type[0])}
                key={pokemon.id}
                pokemon={pokemon}
              />
            );
          })}
      </CardsContainer>
    </>
  );
}

export default App;
