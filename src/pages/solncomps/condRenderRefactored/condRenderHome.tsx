import React, { useState } from 'react';
import pageFactoryInitializer from './pageComps/pageFactory';

const condRenderHome = () => {
  const [pageName, setPageName] = useState<string>('list');
  const [selectedUser, setSelectedUser] = useState<string>('');

  const handleUserClick = (username: string): void => {
    setSelectedUser(username);
    setPageName('details');
  };

  const handleBackToList = (): void => {
    setPageName('list');
  };

  // Use the factory method to get the current page component
  const currentPage = pageFactoryInitializer(pageName, handleUserClick, selectedUser, handleBackToList);

  return <div>{currentPage.render()}</div>;
};

export default condRenderHome;
