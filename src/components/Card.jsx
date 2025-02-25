export default function Card({ pokemon }) {
  return (
    <>
      <div className="relative h-60 overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={pokemon.imagen}
          alt={pokemon.nombre}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100">
          <p className="text-6xl text-white/50">◓</p>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-white text-center font-semibold text-2xl mb-1.5">
          {pokemon.nombre}
        </h3>
      </div>
    </>
  );
}
