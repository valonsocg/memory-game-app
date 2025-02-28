import logo from "../assets/pokeball.svg";
export default function Winner({ score, highScore, onRestart }) {
  return (
    <div className="fixed  inset-0 flex flex-col items-center justify-center  bg-black/50 ">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-sm w-full">
        <h2 className="text-3xl font-bold mb-3  ">You Win</h2>
        <img
          src={logo}
          alt="pokeball"
          className="w-24 h-24 object-center max-w-xs mx-auto"
        />
        <p className="mt-4 text-lg mb-2">
          Your final score is:{" "}
          <span className="text-red-400 text-xl font-semibold">{score}</span>
        </p>
        <p className="mt-4 text-lg mb-2">
          Your highest score was:{" "}
          <span className="text-red-400 text-xl font-semibold">
            {highScore}
          </span>
        </p>

        <div className="flex gap-4 justify-center">
          <button
            className="font-bold py-2 px-4 rounded-md hover:bg-red-500/30 shadow-lg cursor-pointer"
            onClick={onRestart}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}
