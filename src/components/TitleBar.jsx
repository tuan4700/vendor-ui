import Button from "./Button";
import Icon from "./Icon";

const TitleBar = ({ title }) => {
  return (
    <div className="titleBar">
      <div className="titleBar_title">{title}</div>
      <div className="titleBar_actions">
        <div className="titleBar_actions-btn titleBar_actions-search">
          <Button size="small">
            <Icon name="loupe" />
          </Button>
        </div>
        <div className="titleBar_actions-btn titleBar_actions-add">
          <Button size="small" variant="primary">
            <Icon name="whiteCross" />
          </Button>
        </div>
        <div className="titleBar_actions-btn titleBar_actions-menu">
          <Button size="small">
            <Icon name="menu" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
