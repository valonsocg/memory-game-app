function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getRandomPokemon(P) {
  const totalPokemons = 1010;
  const randomIds = new Set();

  while (randomIds.size < 10) {
    const pokemonId = getRandomInt(1, totalPokemons);
    randomIds.add(pokemonId);
  }

  const pokemonPromises = Array.from(randomIds).map((id) =>
    P.getPokemonByName(id)
  );
  const pokemonData = await Promise.all(pokemonPromises);

  return pokemonData.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.front_default,
  }));
}

export default getRandomPokemon;
