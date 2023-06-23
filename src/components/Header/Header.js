import React from "react";
import { Container } from "./styles";

const Header = ({ searchId, setSearchId, namePokemon, setNamePokemon }) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy"
  ];

  return (
    <Container>
      <input
        type="number"
        placeholder="Buscar por id"
        value={searchId}
        onChange={(event) => setSearchId(event.target.value)}
      />
      <input
        type="text"
        placeholder="Buscar por nome"
        value={namePokemon}
        onChange={(event) => setNamePokemon(event.target.value)}
      />
      <select>
        <option value="">Ordenar</option>
        <option value="">Crescente</option>
        <option value="">Decrescente</option>
      </select>
      <select name="tipo" id="tipo">
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;