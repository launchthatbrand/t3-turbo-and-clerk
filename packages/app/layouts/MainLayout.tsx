import type { PropsWithChildren } from "react";
import Sidebar from "../design/components/Sidebar/Sidebar";
import AdminNavbar from "../design/components/Navbars/AdminNavbar";
import HeaderStats from "../design/components/Headers/HeaderStats";

export const MainLayout = (props: PropsWithChildren<unknown>) => {
  return (
    <>
      <Sidebar />
      <div className="bg-blueGray-100 relative md:ml-64">
        <AdminNavbar />
        <HeaderStats />
        <div className="-m-24 mx-auto w-full px-4 md:px-10">
          {props.children}
        </div>
      </div>
    </>
  );
};
export default MainLayout;
