import Card from "./Card";

export default function Board({ pokemons }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          className="bg-black/30 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <Card pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
}
