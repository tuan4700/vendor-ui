import Icon from "./Icon"

const Appbar = () => {
  return (
    <div className="appbar">
      <div className="appbar_account">
        <div className="appbar_account-name">Anh Tuan</div>
        <div className="appbar_account-avatar">T</div>
        <div className="appbar_account-icon"> <Icon name='bell'/></div>
      </div>
    </div>
  );
};

export default Appbar;
