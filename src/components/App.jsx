import "../styles/App.css";
import Scoreboard from "./Scoreboard";
import logo from "../assets/pokeball.svg";
import background from "../assets/background.png";
import Board from "./Board";
import GameOver from "./GameOver";
import { useEffect, useState } from "react";
import { Pokedex } from "pokeapi-js-wrapper";
import getRandomPokemon, { shuffleArray } from "../services/api";

function App() {
  const P = new Pokedex({
    cacheImages: true,
  });

  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [clickedIds, setClickedIds] = useState([]);
  const [gameover, setGameover] = useState(false);

  useEffect(() => {
    async function fetchRandomPokemons() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getRandomPokemon(P);
        setPokemons(data);
      } catch {
        setError("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchRandomPokemons();
  }, []);

  function handlePokemonClick(id) {
    if (clickedIds.includes(id)) {
      setGameover(true);
    } else {
      setClickedIds([...clickedIds, id]);
      setPokemons((prevState) => shuffleArray(prevState));
    }
  }

  function renderPokemons() {
    if (isLoading) {
      return (
        <div className="text-center">
          <p className="text-2xl text-white font-bold shadow-lg">Loading ...</p>
        </div>
      );
    }
    if (error) {
      return (
        <div className="text-2xl text-white font-bold">
          <p>{error}</p>
        </div>
      );
    }
    return <Board pokemons={pokemons} onPokemonClick={handlePokemonClick} />;
  }

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

      <main className="max-w-7xl mx-auto">{renderPokemons()}</main>
      {gameover && <GameOver />}
    </div>
  );
}

export default App;
