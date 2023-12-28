import { Router_APP } from "../../ultility/Router";
import "./Navbar.scss";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsRssFill, BsSteam, BsTwitch, BsYoutube } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/Store/store";
import { setSidebarOff, setSidebarOn } from "../../Redux/Feature/sidebarSlice";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const sidebarStatus = useAppSelector((state) => state.sidebar.sidebarStatus);

  return (
    <div className="navbar-wrapper d-flex align-items-center">
      <div className="m-auto p-auto w-100">
        <div className="navbar-content">
          <div className="brand-and-toggler d-flex align-items-center justify-content-between">
            <Link
              to={Router_APP.HOME}
              className="navbar__brand text-white text-uppercase no-wrap"
            >
              cool<span className="brand-highlight">games</span>
            </Link>
            <button
              type="button"
              className="navbar__show-btn text-white"
              onClick={() => dispatch(setSidebarOn())}
            >
              <HiOutlineMenuAlt3 size={25} />
            </button>
          </div>

          <div className={`navbar__collapse ${sidebarStatus ? "show" : " "}`}>
            <button
              type="button"
              className="navbar__hide-btn"
              onClick={() => dispatch(setSidebarOff())}
            >
              <MdClose size={25} />
            </button>

            <ul className="navbar__nav">
              <li className="navbar__nav-item">
                <Link to={Router_APP.HOME} className="navbar__nav-link">
                  home
                </Link>
              </li>
              <li className="navbar__nav-item">
                <Link
                  to={Router_APP.VIEWCREATORALL}
                  className="navbar__nav-link"
                >
                  creators
                </Link>
              </li>
              <li className="navbar__nav-item">
                <Link to={Router_APP.VIEWSTOREALL} className="navbar__nav-link">
                  stores
                </Link>
              </li>
              <li className="navbar__nav-item">
                <Link to={Router_APP.VIEWGAMEALL} className="navbar__nav-link">
                  games
                </Link>
              </li>
            </ul>

            <ul className="connect-list d-flex justify-content-center align-items-center mt-5 flex-wrap">
              <li className="text-uppercase fw-7 w-100 connect-list__text mb-2">
                connect
              </li>
              <li className="connect-list__item">
                <Link to="/" className="connect-list__link">
                  <BsRssFill />
                </Link>
              </li>
              <li className="connect-list__item">
                <Link to="/" className="connect-list__link">
                  <BsSteam size={18} />
                </Link>
              </li>
              <li className="connect-list__item">
                <Link to="/" className="connect-list__link">
                  <BsTwitch size={18} />
                </Link>
              </li>
              <li className="connect-list__item">
                <Link to="/" className="connect-list__link">
                  <BsYoutube size={19} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
