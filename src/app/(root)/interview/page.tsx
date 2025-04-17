import Agent from '@/src/components/sections/Agent';
import React from 'react';

const Page = () => {
  return (
    <>
      <h3>Interview Generation</h3>
      <Agent userName="Wilson Tran" userId="user1" type="generate" />
    </>
  );
};

export default Page;
