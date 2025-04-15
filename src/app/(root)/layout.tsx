import Header from "@/src/components/layout/Header";
import React, { ReactNode } from "react";

type Props = {};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="root-layout">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
