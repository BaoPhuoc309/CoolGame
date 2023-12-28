import { useEffect, useState } from "react";
import { fetchAsyncGames } from "../../Redux/Feature/gameSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/Store/store";
import Title from "../../components/common/Title";
import Preloader from "../../components/common/Preloader";
import GameList from "../../components/game/GameList";
import { STATUS } from "../../ultility/status";
import "./GameAllPage.scss";
import Pagination from "../../components/common/Pagination";

const GameAllPage = () => {
  const dispatch = useAppDispatch();
  const games = useAppSelector((state) => state.game.games.results);
  const gamesStatus = useAppSelector((state) => state.game.gamesStatus);
  const nextPage = useAppSelector((state) => state.game.games.next);
  const prevPage = useAppSelector((state) => state.game.games.previous);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(fetchAsyncGames(page));
  }, [dispatch, page]);

  const pageHandler = (pageValue: number) => setPage(pageValue);

  return (
    <div className="games-all">
      <div className="sc-games section">
        <div className="container">
          <Title
            titleName={{
              firstText: "all",
              secondText: "games",
            }}
          />

          {gamesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : games?.length > 0 ? (
            <>
              <GameList games={games} />
              <Pagination
                pageHandler={pageHandler}
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={page}
              />
            </>
          ) : (
            "No games found!"
          )}
        </div>
      </div>
    </div>
  );
};

export default GameAllPage;
