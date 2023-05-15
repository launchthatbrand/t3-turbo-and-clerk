import type { PropsWithChildren } from "react";
import Sidebar from "../design/components/Sidebar/Sidebar";
import Navbar from "../design/components/Navbars/AuthNavbar";
import HeaderStats from "../design/components/Headers/HeaderStats";

export const FrontendLayout = (props: PropsWithChildren<unknown>) => {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative h-full min-h-screen w-full py-40">
          <div
            className="bg-blueGray-800 bg-full absolute top-0 h-full w-full bg-no-repeat"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {props.children}
        </section>
      </main>
    </>
  );
};
export default FrontendLayout;
