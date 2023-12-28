import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./Tabs.scss";
import GenreItem from "../genre/GenreItem";

interface GamesItem {
  id: number;
  name?: string;
}

interface Genre {
  id: number;
  name: string;
  games: GamesItem[];
}

interface GenresProps {
  sliceValue?: number;
  genres: Genre[];
}

const Tabs: React.FC<GenresProps> = ({ genres }) => {
  const [activeTab, setActiveTab] = useState<Genre>(genres[0]);
  const [tabButtonStatus, setTabButtonStatus] = useState<boolean>(false);

  const tabClickHandler = (id: number) => {
    genres.map((item) => {
      if (item.id === id) {
        setActiveTab(item);
      }
    });
  };

  const tabButtonHandler = () =>
    setTabButtonStatus((prevStatus) => !prevStatus);

  return (
    <div className="tabs-wrapper bg-white">
      <div className="container">
        <div className="tabs-content">
          <ul className={`tabs-buttons ${tabButtonStatus ? "show" : ""}`}>
            <button
              type="button"
              className="tabs-buttons-close bg-white d-flex align-items-center justify-content-center"
              onClick={tabButtonHandler}
            >
              <AiOutlineMenu size={22} />
            </button>
            {genres.map((item) => {
              return (
                <li
                  key={item?.id}
                  className={`tabs-button ${
                    item?.id === activeTab.id ? "tabs-active" : ""
                  }`}
                >
                  <button
                    className="text-white"
                    type="button"
                    onClick={() => tabClickHandler(item?.id)}
                  >
                    {item?.name}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="tabs-body">
            <div className="card-list">
              {activeTab?.games?.map((item) => (
                <GenreItem key={item.id} gameItem={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
