import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/Store/store";
import Title from "../../components/common/Title";
import { fetchAllCreators } from "../../Redux/Feature/creatorSlice";
import { STATUS } from "../../ultility/status";
import Preloader from "../../components/common/Preloader";
import Pagination from "../../components/common/Pagination";
import CreatorList from "../../components/creator/CreatorList";
import "./CreatorAllPage.scss";

const CreatorAllPage = () => {
  const dispatch = useAppDispatch();
  const creators = useAppSelector((state) => state.creator.creators.results);
  const creatorsStatus = useAppSelector(
    (state) => state.creator.creatorsStatus
  );
  const nextPage = useAppSelector((state) => state.creator.creators.next);
  const prevPage = useAppSelector((state) => state.creator.creators.previous);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllCreators(page));
  }, [page]);

  const pageHanlder = (pageValue: number) => setPage(pageValue);

  return (
    <div className="creatorpage-wrapper">
      <div className="sc-creator section">
        <div className="container">
          <Title
            titleName={{
              firstText: "all",
              secondText: "creator",
            }}
          />
          {creatorsStatus === STATUS.LOADING ? (
            <Preloader />
          ) : creators.length > 0 ? (
            <>
              <CreatorList creators={creators} />
              <Pagination
                pageHandler={pageHanlder}
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={page}
              />
            </>
          ) : (
            "No creators found!"
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatorAllPage;
