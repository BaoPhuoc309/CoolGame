import GameItem from "./GameItem";

interface Game {
  id: number;
}

interface GameListProps {
  sliceValue?: number;
  games: Game[]; // Update with the actual type of your games
}

const GameList: React.FC<GameListProps> = ({
  games,
  sliceValue = games.length,
}) => {
  return (
    <div className="card-list">
      {games?.slice(0, sliceValue).map((game) => (
        <GameItem key={game.id} gameItem={game} />
      ))}
    </div>
  );
};

export default GameList;
