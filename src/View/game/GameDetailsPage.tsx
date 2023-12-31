import { useParams } from "react-router-dom";
import { game_details_image } from "../../ultility/image";
import { useAppDispatch, useAppSelector } from "../../Redux/Store/store";
import { useEffect } from "react";
import { fetchAsyncGameDetails } from "../../Redux/Feature/gameSlice";
import { STATUS } from "../../ultility/status";
import BreadCrumb from "../../components/common/BreadCrumb";
import Preloader from "../../components/common/Preloader";
import GameDetail from "../../components/game/GameDetail";
import "./GameDetailsPage.scss";

interface SingleGameData {
  id: number;
  name?: string;
}

const GameDetailsPage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const dispatch = useAppDispatch();
  const singleGameData = useAppSelector(
    (state) => state.game.gamesSingle
  ) as SingleGameData;
  const singleGameStatus = useAppSelector(
    (state) => state.game.gamesSingleStatus
  );

  useEffect(() => {
    dispatch(fetchAsyncGameDetails(Number(gameId)));
  }, [dispatch, gameId]);

  const gameNameById = {
    [singleGameData.id]: singleGameData.name,
  };
  console.log(singleGameData);

  return (
    <div className="game-detail">
      <div
        className="sc-detail"
        style={{
          background: `linear-gradient(0deg, rgba(16,14,43,0.8), rgba(16, 14, 43, 0.8)), url(${game_details_image}) center/cover no-repeat`,
        }}
      >
        <div className="container">
          <BreadCrumb dataNameById={gameNameById} />
          {singleGameStatus === STATUS.LOADING ? (
            <Preloader />
          ) : (
            <GameDetail gameData={singleGameData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default GameDetailsPage;
