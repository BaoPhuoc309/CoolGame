import { Link } from "react-router-dom";
import "./StoresItem.scss";

interface StoreProp {
  storeItem: {
    id?: number;
    name?: string;
    image_background?: string;
    domain?: string;
    games_count?: string;
    games?: { id: number | string; name: string }[];
  };
}
const StoresItem: React.FC<StoreProp> = ({ storeItem }) => {
  return (
    <div className="card store-item-wrapper d-grid">
      <div className="card-img img-fit-cover">
        <img
          src={storeItem?.image_background}
          alt={storeItem?.id?.toString()}
        />
      </div>
      <div className="card-text d-flex flex-column justify-content-center">
        <h5 className="card-title text-uppercase fw-7 text-uppercase">
          <Link className="text-white" to={`stores/${storeItem?.id}`}>
            {storeItem?.name}
          </Link>
        </h5>
        <ul className="card-info">
          <li>
            <span className="fw-7">Domain: </span>
            <a href={"https://www." + storeItem?.domain}>{storeItem?.domain}</a>
          </li>
          <li>
            <span className="fw-7">Games Count: </span>
            {storeItem?.games_count}
          </li>
        </ul>
        {storeItem?.games && <p className="fw-7 text-white">Games:</p>}
        <ul className="card-games d-flex flex-wrap">
          {storeItem?.games?.map((item) => (
            <li className="card-game" key={item.id}>
              <Link to={`games/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StoresItem;
