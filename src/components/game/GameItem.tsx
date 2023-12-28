import { BsStar } from "react-icons/bs";
import StarRating from "../common/StarRating";
import { Link } from "react-router-dom";
import "./GameItem.scss";

interface GameItem {
  gameItem: {
    id: number;
    background_image?: string;
    name?: string;
    rating?: number;
    released?: string;
    updated?: string;
    ratings_count?: number;
  };
}

const GameItem: React.FC<GameItem> = ({ gameItem }) => {
  return (
    <div className="card">
      <div className="card-top img-fit-cover">
        <img src={gameItem?.background_image} alt={gameItem?.name} />
        <StarRating rating={gameItem?.rating || 0} />
        <div className="ratings-count">
          {gameItem?.ratings_count} <BsStar className="ms-1" size={12} />
        </div>
      </div>
      <div className="card-bottom">
        <h4 className="text-white text-uppercase card-title">
          {gameItem?.name}
        </h4>
        <div className="block-wrap d-flex align-items-end justify-content-between">
          <div className="details-group">
            <div className="details-item d-flex align-items-center">
              <p className="details-item-name fw-6">Release Date: &nbsp;</p>
              <p className="details-item-value">{gameItem?.released} </p>
            </div>
            <div className="details-item d-flex align-items-center">
              <p className="details-item-name fw-6">Updated: &nbsp;</p>
              <p className="details-item-value">{gameItem?.updated} </p>
            </div>
          </div>
          <Link
            to={`/games/${gameItem?.id}`}
            className="card-button text-uppercase"
          >
            see more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
