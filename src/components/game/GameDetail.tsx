import {
  AiFillClockCircle,
  AiFillSetting,
  AiFillTags,
  AiOutlineDesktop,
} from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import StoresItem from "../store/StoresItem";
import "./GameDetail.scss";
import "react-tabs/style/react-tabs.css";

interface Platforms {
  id: number;
  name?: string;
  platform: {
    id: number;
    name?: string;
    image_background: string;
  };
}

interface Developers {
  id: number;
  name?: string;
}

interface Genres {
  id: number;
  name?: string;
}

interface Publishers {
  id: number;
  name?: string;
}

interface Stores {
  id: number;
  store: {
    id: number;
  };
}

interface GameDetails {
  id: number;
  name?: string;
  description?: string;
  background_image?: string;
  released?: string;
  platforms?: Platforms[];
  developers?: Developers[];
  genres?: Genres[];
  publishers?: Publishers[];
  stores?: Stores[];
}

interface GameDetailProp {
  gameData: GameDetails;
}

const GameDetail: React.FC<GameDetailProp> = ({ gameData }) => {
  const platforms = gameData?.platforms?.map(
    (platform) => platform.platform.name
  );

  const developers = gameData?.developers?.map((developer) => developer.name);
  const genres = gameData?.genres?.map((genre) => genre.name);
  const publishers = gameData?.publishers?.map((publisher) => publisher.name);

  return (
    <div className="detail-wrapper">
      <div className="detail-title">
        <h3 className="detail-title__text text-white fw-6 text-uppercase">
          {gameData.name}
        </h3>
      </div>

      <div className="detail-grid d-grid">
        <div className="detail-grid__left img-fit-cover">
          <img src={`${gameData.background_image}`} alt={gameData.name} />
        </div>

        <div className="detail-grid__right">
          <h4 className="detail-grid__right-title fw-7 text-green mb-3">
            Game <span className="text-white">Details</span>
          </h4>
          <div
            className="para-text"
            dangerouslySetInnerHTML={{
              __html:
                gameData.description?.split(".").splice(0, 3).join(".") + ".",
            }}
          ></div>

          <ul className="detail-list__group">
            <li className="list-group__item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <AiFillClockCircle size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">
                  release date:
                </span>
              </div>
              <span className="item-right item-value fw-4">
                {gameData.released}
              </span>
            </li>

            <li className="list-group__item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <AiOutlineDesktop size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">
                  platforms:
                </span>
              </div>
              <span className="item-right item-value fw-4">
                {platforms?.join(", ")}
              </span>
            </li>

            <li className="list-group__item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <AiFillSetting size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">
                  developers:
                </span>
              </div>
              <span className="item-right item-value fw-4">
                {developers?.join(", ")}
              </span>
            </li>

            <li className="list-group__item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <AiFillTags size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">genres:</span>
              </div>
              <span className="item-right item-value fw-4">
                {genres?.join(", ")}
              </span>
            </li>

            <li className="list-group__item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <FaGlobe size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">
                  publishers:
                </span>
              </div>
              <span className="item-right item-value fw-4">
                {publishers?.join(", ")}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Tab */}
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Platform</Tab>
          <Tab>Stores</Tab>
        </TabList>

        <TabPanel>
          <h3 className="text-white mb-3">Game Description</h3>
          <div
            className="para-text"
            dangerouslySetInnerHTML={{ __html: gameData?.description || "" }}
          ></div>
        </TabPanel>
        <TabPanel>
          <h3 className="text-white mb-3">Game Platforms</h3>
          <div className="platforms-list card-list">
            {gameData?.platforms?.map((item) => {
              return (
                <div
                  className="platform-item text-white"
                  key={item?.platform?.id}
                >
                  <p className="platform-name mb-2">{item?.platform?.name}</p>
                  <div className="platform-img-wrapper img-fit-cover">
                    <img
                      src={item?.platform?.image_background}
                      className="platform-img"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="text-white mb-3">Available Stores</h3>
          <div className="card-list">
            {gameData?.stores?.map((item) => (
              <StoresItem key={item?.store?.id} storeItem={item?.store} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default GameDetail;
