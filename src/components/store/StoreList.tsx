import StoresItem from "./StoresItem";
import './StoresList.scss'

interface Store {
  id: number;
}

interface StoreProp {
  stores: Store[];
}

const StoreList: React.FC<StoreProp> = ({ stores }) => {
  return (
    <div className="store-wrapper">
      <div className="store-list d-grid">
        {stores.map((store) => (
          <StoresItem key={store.id} storeItem={store} />
        ))}
      </div>
    </div>
  );
};

export default StoreList;
