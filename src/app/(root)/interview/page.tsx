import Agent from "@/src/components/sections/Agent";
import { getCurrentUser } from "@/src/lib/actions/auth.action";
import React from "react";

const Page = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <h3>Interview Generation</h3>
      <Agent userName={user?.name} userId={user?.id} type="generate" />
    </>
  );
};

export default Page;
