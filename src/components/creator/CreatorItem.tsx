import "./CreatorItem.scss";

interface CreatorItemProp {
  creatorItem: {
    id?: number;
    image?: string;
    name?: string;
    games_count?: number;
    image_background?: string;
    positions?: { id: number; name: string; slug: string }[] | undefined;
    games?:
      | { id: number; name: string; slug?: string; added?: number }[]
      | undefined;
  };
}

const CreatorItem: React.FC<CreatorItemProp> = ({ creatorItem }) => {
  const positions =
    creatorItem?.positions?.map((position) => position.name) || [];
  const games = creatorItem?.games?.map((game) => game.name) || [];

  return (
    <div
      className="card creator-wrapper"
      style={{
        background: `linear-gradient(rgba(7, 5, 27, 0.9), rgba(0, 0, 0, 0.95)), url(${creatorItem?.image_background}) center/cover no-repeat`,
      }}
    >
      <div className="card-top">
        <img src={creatorItem?.image} />
      </div>

      <div className="card-bottom text-white">
        <h4 className="card-title">{creatorItem?.name} </h4>
        <ul className="card-list-group text-white">
          <li className="list-group-item">
            <span className="item-left">Games Count: </span>
            <span className="item-right">{creatorItem?.games_count}</span>
          </li>
          <li className="list-group-item">
            <span className="item-left">Position: </span>
            <span className="item-right">
              {positions.length > 0 ? positions.join(", ") : "N/A"}
            </span>
          </li>
          <li className="list-group-item">
            <span className="item-left">Games: </span>
            <span className="item-right">
              {games.length > 0 ? games.join(", ") : "N/A"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CreatorItem;
