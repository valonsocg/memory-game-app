export default function Scoreboard({ score, highScore }) {
  return (
    <div className="flex flex-col mb-8 bg-black/30 p-2 rounded-2xl shadow-lg w-90 text-gray-200 font-semibold">
      <div className="flex justify-center text-center text-sm font-bold gap-4  py-6">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
      <p className="self-center text-2xl text-yellow-300 shadow-lg font-semibold mb-2">
        🏆 {score}/10
      </p>
    </div>
  );
}
