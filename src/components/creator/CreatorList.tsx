import CreatorItem from "./CreatorItem";
import "./CretortList.scss";

interface Cretor {
  id: number;
}

interface CreatorProp {
  creators: Cretor[];
}

const CreatorList: React.FC<CreatorProp> = ({ creators }) => {
  return (
    <div className="creatorlist-wrapper">
      <div className="card-list">
        {creators.map((item) => (
          <CreatorItem key={item.id} creatorItem={item} />
        ))}
      </div>
    </div>
  );
};

export default CreatorList;
