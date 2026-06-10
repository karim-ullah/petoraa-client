import Aside from "@/components/detailspage/Aside";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="max-w-7xl md:w-7xl mx-auto px-3 md:min-h-screen flex flex-col md:flex-row justify-between md:gap-6 overflow-x-hidden">
      <div className="w-full md:w-[20%]">
        <Aside ></Aside>
      </div>

      
        <div className="w-full md:w-[80%]">
          {children}
        </div>
      
    </div>
  );
};

export default layout;
