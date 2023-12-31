import { Link } from "react-router-dom";
import { Router_APP } from "../../ultility/Router";
import "./StoresDetail.scss";

interface StoreProp {
  storeData: {
    id: number;
    image_background?: string;
    name?: string;
    domain?: string;
    games_count?: number;
    description?: string;
  };
}

const StoresDetail: React.FC<StoreProp> = ({ storeData }) => {
  return (
    <div className="detail-wrapper">
      <div className="detail-grid d-grid">
        <div className="detail-grid__left img-fit-cover">
          <img src={storeData?.image_background} alt={storeData?.name} />
        </div>

        <div className="detail-grid__right mt-4">
          <h5 className="card-title text-white fw-7 text-uppercase">
            <Link
              to={`${Router_APP.VIEWSTOREDETAILS}${storeData.id}`}
              className="text-white"
            >
              {storeData?.name}
            </Link>
          </h5>
          <ul className="card-info">
            <li>
              <span className="fw-7 text-white">Domain: </span>
              <a
                className="text-white"
                href={"https://www." + storeData?.domain}
              >
                {storeData?.domain}
              </a>
            </li>
            <li>
              <span className="fw-7 text-white">Games Count: </span>
              <span className="text-white">{storeData?.games_count}</span>
            </li>
          </ul>
          <div
            className="para-text"
            dangerouslySetInnerHTML={{ __html: storeData?.description || "" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StoresDetail;
