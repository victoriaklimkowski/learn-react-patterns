import React from 'react';
import { usePageManager } from '@/hooks/pageManager';

const condRenderHome = () => {
  const { currentPage } = usePageManager();

  return <div>{currentPage.render()}</div>;
};

export default condRenderHome;
