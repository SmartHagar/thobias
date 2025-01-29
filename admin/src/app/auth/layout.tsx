/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <div className="min-h-screen h-screen absolute inset-0 bg-black z-50">
      {props.children}
    </div>
  );
};

export default layout;
