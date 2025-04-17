import Header from "@/src/components/layout/Header";
import { isAuthenticated } from "@/src/lib/actions/auth.action";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");
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
