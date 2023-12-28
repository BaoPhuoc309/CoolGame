import { loader } from "../../ultility/image";
import "./Preloader.scss";

const Preloader: React.FC = () => {
  return (
    <div className="preloader-wrapper d-flex align-items-center justify-content-center">
      <img src={loader} alt="preloader" />
    </div>
  );
};

export default Preloader;
