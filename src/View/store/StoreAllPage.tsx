import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/Store/store";
import { fetchAsyncStores } from "../../Redux/Feature/storeSlice";
import Title from "../../components/common/Title";
import { STATUS } from "../../ultility/status";
import Preloader from "../../components/common/Preloader";
import StoreList from "../../components/store/StoreList";
import "./StoresAllPage.scss";

const StoreAllPage = () => {
  const dispatch = useAppDispatch();
  const stores = useAppSelector((state) => state.store.stores.results);
  const storesStatus = useAppSelector((state) => state.store.storesStatus);

  useEffect(() => {
    dispatch(fetchAsyncStores());
  }, []);

  return (
    <div className="store-wrapper">
      <div className="sc-stores section">
        <div className="container">
          <Title
            titleName={{
              firstText: "all",
              secondText: "stores",
            }}
          />
          {storesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : stores?.length > 0 ? (
            <>
              <StoreList stores={stores} />
            </>
          ) : (
            "No stores found!"
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreAllPage;
