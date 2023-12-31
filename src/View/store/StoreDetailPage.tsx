import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/Store/store";
import { fetchAsyncStoresDetails } from "../../Redux/Feature/storeSlice";
import { useEffect } from "react";
import BreadCrumb from "../../components/common/BreadCrumb";
import { STATUS } from "../../ultility/status";
import Preloader from "../../components/common/Preloader";
import StoresDetail from "../../components/store/StoresDetail";
import "./StoreDetailPage.scss";

interface Singlestore {
  id: number;
  name?: string;
}

const StoreDetailPage: React.FC = () => {
  const { storeId } = useParams<{ storeId: string }>();
  const dispatch = useAppDispatch();
  const singleStoreData = useAppSelector(
    (state) => state.store.storesSingle
  ) as Singlestore;
  const singleStoreStatus = useAppSelector(
    (state) => state.store.storesSingleStatus
  );

  useEffect(() => {
    dispatch(fetchAsyncStoresDetails(Number(storeId)));
  }, [storeId]);

  console.log(singleStoreData, "single");

  const storeNameById = {
    [singleStoreData.id]: singleStoreData.name,
  };

  console.log(storeNameById, "id");

  return (
    <div className="store-detail">
      <div className="sc-detail">
        <div className="container">
          <BreadCrumb dataNameById={storeNameById} />
          {singleStoreStatus === STATUS.LOADING ? (
            <Preloader />
          ) : (
            <StoresDetail storeData={singleStoreData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreDetailPage;
