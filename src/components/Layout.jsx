import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col-reverse lg:grid grid-cols-4 gap-4 px-4 min-h-[calc(90vh-112px)]">
      <div className="col-span-3 bg-[#ECF0F4] overflow-y-auto rounded-lg max-h-[calc(100vh-112px)]">
        <Outlet />
      </div>
      <div className="col-span-1 md:h-auto">right side</div>
    </div>
  );
};
export default Layout;
