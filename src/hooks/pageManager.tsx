import React from 'react';
import pageFactoryInitializer from '@/pages/solncomps/condRenderRefactored/pageComps/pageFactoryInitializer';

// Custom hook for managing page state and user selection
export const usePageManager = () => {
  const [pageName, setPageName] = React.useState<string>('list');
  const [selectedUser, setSelectedUser] = React.useState<string>('');

  const handleUserClick = (username: string): void => {
    setSelectedUser(username);
    setPageName('details');
  };

  const handleBackToList = (): void => {
    setPageName('list');
  };

  const currentPage = pageFactoryInitializer(pageName, handleUserClick, selectedUser, handleBackToList);

  return { currentPage };
};