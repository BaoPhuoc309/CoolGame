import { BsStar } from "react-icons/bs";
import StarRating from "../common/StarRating";
import { useEffect, useState } from "react";
import customAxios from "../../Api/axios";
import { apiUrl } from "../../constants";
import { API_KEY } from "../../Api/api_key";
import { Link } from "react-router-dom";
import "./GenreItem.scss";

interface GameItem {
  id: number;
}

interface GenreItemProps {
  gameItem: GameItem;
}

interface GameData {
  background_image?: string;
  name?: string;
  rating?: number | undefined;
  ratings_count?: number;
  released?: string;
  updated?: string;
  id?: number;
}

const GenreItem: React.FC<GenreItemProps> = ({ gameItem }) => {
  const [gameData, setGameData] = useState<GameData>({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await customAxios.get(
        `${apiUrl.gamesURL}/${gameItem.id}?${API_KEY}`
      );
      setGameData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="card">
      <div className="card-top img-fit-cover">
        <img src={gameData?.background_image} alt={gameData?.name} />
        <StarRating rating={gameData?.rating || 0} />
        <div className="ratings-count">
          {gameData?.ratings_count} <BsStar className="ms-1" size={12} />
        </div>
      </div>
      <div className="card-bottom">
        <h4 className="text-white text-uppercase card-title">
          {gameData?.name}
        </h4>
        <div className="block-wrap d-flex align-items-end justify-content-between">
          <div className="details-group">
            <div className="details-item d-flex align-items-center">
              <p className="details-item-name fw-6">Release Date: &nbsp;</p>
              <p className="details-item-value">{gameData?.released} </p>
            </div>
            <div className="details-item d-flex align-items-center">
              <p className="details-item-name fw-6">Updated: &nbsp;</p>
              <p className="details-item-value">{gameData?.updated} </p>
            </div>
          </div>
          <Link
            to={`/games/${gameData?.id}`}
            className="card-button text-uppercase"
          >
            see more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GenreItem;
