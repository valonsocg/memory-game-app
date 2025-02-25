export default function Scoreboard() {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex justify-center text-xl font-bold gap-4  py-6">
        <p>Score: 0</p>
        <p>High Score: 0</p>
      </div>
      <p className="self-center text-lg font-semibold">0/5</p>
    </div>
  );
}
