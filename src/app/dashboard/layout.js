import Aside from "@/components/detailspage/Aside";
import Topbar from "@/components/detailspage/Topbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="max-w-7xl md:w-7xl mx-auto px-6 min-h-screen flex flex-col md:flex-row gap-6">
      <div className="md:w-[20%]">
        <Aside></Aside>
      </div>

      <div className="md:w-[80%]">
        {/* <Topbar></Topbar> */}
        {children}
      </div>
    </div>
  );
};

export default layout;
