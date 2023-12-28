import "./Banner.scss";
import { banner_image } from "../../ultility/image";
import { FaGamepad } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className="banner-wrapper d-flex align-items-center justify-content-start"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), linear-gradient(248.75deg, rgba(0, 159, 157, 0.41) 0%, rgba(15, 10, 60, 0.41) 38.46%), url(${banner_image}) center/cover no-repeat`,
      }}
    >
      <div className="banner-wrapper__content w-100 container text-white">
        <div className="banner-wrapper__content-title text-uppercase">
          join streaming
        </div>
        <h1 className="banner-wrapper__content-main text-uppercase">
          best online game to play
        </h1>
        <p className="banner-wrapper__content-description">
          Live gaming with lots of other games. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation.
        </p>
        <button
          type="button"
          className="banner-wrapper__content-button d-flex align-items-center"
        >
          <span className="banner-wrapper__content-button__icon">
            <FaGamepad className="text-white" size={25} />
          </span>
          <span className="banner-wrapper__content-button__text text-green">
            play now
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
