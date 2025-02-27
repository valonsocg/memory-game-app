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
    name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
    image: pokemon.sprites.front_default,
  }));
}

export function shuffleArray(array) {
  const shuffled = [...array]; // Copiar el array original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Intercambiar elementos
  }
  return shuffled;
}

export default getRandomPokemon;
