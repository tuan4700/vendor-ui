import Appbar from "./Appbar";
import Drawer from "./Drawer";

const MainLayout = ({ children }) => {
  return (
    <div className="mainLayout">
      <div className="mainLayout_drawer">
        <Drawer />
      </div>
      <div className="mainLayout_content">
        <div className="mainLayout_appbar">
          <Appbar />
        </div>
        <div className="mainLayout_main">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
