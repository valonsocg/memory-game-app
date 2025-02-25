import "../styles/App.css";
import Scoreboard from "./Scoreboard";
import logo from "../assets/pokeball.svg";
import background from "../assets/background.png";
import Board from "./Board";
import GameOver from "./GameOver";

function App() {
  const pokemons = [
    {
      id: 1,
      nombre: "Bulbasaur",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    {
      id: 2,
      nombre: "Ivysaur",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    },
    {
      id: 3,
      nombre: "Venusaur",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    },
    {
      id: 4,
      nombre: "Charmander",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    },
    {
      id: 5,
      nombre: "Charmeleon",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    },
    {
      id: 6,
      nombre: "Charizard",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    },
    {
      id: 7,
      nombre: "Squirtle",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    },
    {
      id: 8,
      nombre: "Wartortle",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    },
    {
      id: 9,
      nombre: "Blastoise",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    },
    {
      id: 10,
      nombre: "Caterpie",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    },
    {
      id: 11,
      nombre: "Metapod",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    },
    {
      id: 12,
      nombre: "Butterfree",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    },
    {
      id: 13,
      nombre: "Weedle",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    },
    {
      id: 14,
      nombre: "Kakuna",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
    },
    {
      id: 15,
      nombre: "Beedrill",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
    },
    {
      id: 16,
      nombre: "Pidgey",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    },
    {
      id: 17,
      nombre: "Pidgeotto",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
    },
    {
      id: 18,
      nombre: "Pidgeot",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
    },
    {
      id: 19,
      nombre: "Rattata",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    },
    {
      id: 20,
      nombre: "Raticate",
      imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-sky-300 py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <header className="flex flex-col items-center">
        <div className="flex justify-center gap-2 mb-4">
          <img
            className="size-8 drop-shadow-[2px_2px_0_black]"
            src={logo}
            alt="a pokeball"
          />
          <h1 className="text-4xl ">
            <span className="text-red-500 font-bold drop-shadow-[2px_2px_0_black]">
              Poke
            </span>
            <span className="text-white font-bold drop-shadow-[2px_2px_0_black] ">
              Memo
            </span>
          </h1>
        </div>

        <Scoreboard />
      </header>

      <main className="max-w-7xl mx-auto">
        <Board pokemons={pokemons} />
      </main>
      <GameOver />
    </div>
  );
}

export default App;
