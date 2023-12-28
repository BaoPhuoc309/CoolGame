import "./Title.scss";

type TitleName = {
  firstText: string;
  secondText: string;
};

interface TitleProps {
  titleName: TitleName;
}

const Title: React.FC<TitleProps> = ({ titleName }) => {
  return (
    <div className="title-wrapper">
      <h3 className="title-wrapper__title">
        {titleName.firstText}
        <span className="title-wrapper__subtitle">{titleName.secondText}</span>
      </h3>
      <div className="title-wrapper__line"></div>
    </div>
  );
};

export default Title;
