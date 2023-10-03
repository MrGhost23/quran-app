import { Outlet } from "react-router-dom";
import Aside from "./Aside";

const Layout = () => {
  return (
    <div className="flex flex-col-reverse lg:grid grid-cols-4 gap-4 px-4 min-h-[calc(80vh-112px)]">
      <div className="col-span-3">
        <Outlet />
      </div>
      <div className="col-span-1 md:h-auto">
        <Aside />
      </div>
    </div>
  );
};
export default Layout;
