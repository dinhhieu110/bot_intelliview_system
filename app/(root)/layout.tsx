import React, { ReactNode } from 'react';

type Props = {};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default RootLayout;
