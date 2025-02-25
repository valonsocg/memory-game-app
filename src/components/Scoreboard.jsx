export default function Scoreboard() {
  return (
    <div className="flex flex-col mb-8 bg-black/30 p-2 rounded-2xl shadow-lg w-74 text-white font-semibold">
      <div className="flex justify-center text-xl font-bold gap-4  py-6">
        <p>Score: 0</p>
        <p>High Score: 0</p>
      </div>
      <p className="self-center text-2xl text-yellow-300 shadow-lg font-semibold">
        🏆 0/5
      </p>
    </div>
  );
}
