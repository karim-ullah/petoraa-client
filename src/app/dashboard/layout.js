import Aside from "@/components/detailspage/Aside";
import Topbar from "@/components/detailspage/Topbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="w-7xl mx-auto px-6 min-h-screen flex gap-4">
      <div className="w-[20%]">
        <Aside></Aside>
      </div>

      <div className="w-[80%]">
        {/* <Topbar></Topbar> */}
        {children}
      </div>
    </div>
  );
};

export default layout;
