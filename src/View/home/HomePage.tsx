import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/Store/store";
import Banner from "../../components/common/Banner";
import Title from "../../components/common/Title";
import "./HomePage.scss";
import { fetchAsyncGames } from "../../Redux/Feature/gameSlice";
import { STATUS } from "../../ultility/status";
import Preloader from "../../components/common/Preloader";
import GameList from "../../components/game/GameList";
import { Link } from "react-router-dom";
import { Router_APP } from "../../ultility/Router";
import ImageSlider from "../../components/common/ImageSlider";
import { join_image, store_image } from "../../ultility/image";
import { fetchAsyncGenres } from "../../Redux/Feature/genreSlice";
import Tabs from "../../components/common/Tabs";
import { fetchAsyncStores } from "../../Redux/Feature/storeSlice";
import StoreList from "../../components/store/StoreList";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const games = useAppSelector((state) => state.game.games.results);
  const gamesStatus = useAppSelector((state) => state.game.gamesStatus);
  const genres = useAppSelector((state) => state.genre.genres.results);
  const genresStatus = useAppSelector((state) => state.genre.genresStatus);
  const stores = useAppSelector((state) => state.store.stores.results);
  const storesStatus = useAppSelector((state) => state.store.storesStatus);

  useEffect(() => {
    dispatch(fetchAsyncGames());
    dispatch(fetchAsyncGenres());
    dispatch(fetchAsyncStores());
  }, [dispatch]);

  const renderedPopularGames = (
    <>
      <GameList sliceValue={9} games={games} />
      <div className="d-flex justify-content-center">
        <Link to={Router_APP.VIEWGAMEALL} className="section-btn">
          see more games
        </Link>
      </div>
    </>
  );

  console.log(stores);

  return (
    <div className="home-wrapper">
      <Banner />

      <section className="section sc-popular">
        <div className="container">
          <Title
            titleName={{ firstText: "top popular", secondText: "games" }}
          />
          {gamesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : games?.length > 0 ? (
            renderedPopularGames
          ) : (
            "No games found!"
          )}
        </div>
      </section>

      <ImageSlider />

      <section
        className="section sc-join d-flex align-items-center"
        style={{
          background: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${join_image}) center/cover no-repeat`,
        }}
      >
        <div className="container w-100">
          <div className="join-content text-white mx-auto text-center">
            <h2 className="join-title mb-3">
              JOIN THE <span>COMMUNITY</span>
            </h2>
            <p className="lead-text">
              Join our Discord community which is in the making and made by
              gamers for gamers. All are welcome to join no matter the game you
              play, we&apos;re here to have a good.
            </p>
            <button type="button" className="section-btn mt-4">
              join discord
            </button>
          </div>
        </div>
      </section>

      <section className="section sc-genres">
        <div className="container">
          <Title
            titleName={{
              firstText: "Top",
              secondText: "genres",
            }}
          />
        </div>
        {genresStatus === STATUS.LOADING ? (
          <Preloader />
        ) : genres?.length > 0 ? (
          <Tabs sliceValue={9} genres={genres} />
        ) : (
          "No genres found!"
        )}
      </section>

      <section
        className="section sc-stores"
        style={{
          background: `linear-gradient(180deg, rgba(12, 10, 36, 0.73) 0%, rgba(0, 0, 0, 0.73) 72.92%), url(${store_image}) center/cover no-repeat`,
        }}
      >
        <div className="container">
          <Title
            titleName={{
              firstText: "our",
              secondText: "game stores",
            }}
          />
          {storesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : stores.length > 0 ? (
            <StoreList stores={stores} />
          ) : (
            "No stores found!"
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
