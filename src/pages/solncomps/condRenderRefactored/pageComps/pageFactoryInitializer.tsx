import PageComponent from './pageComp';
import ListPage from './listPage';
import DetailsPage from './detailsPage';

const pageFactoryInitializer = (
    pageName: string,
    onUserClick: (username: string) => void,
    selectedUser: string,
    onBack: () => void
  ): PageComponent => {
    switch (pageName) {
      case 'list':
        return new ListPage(onUserClick);
      case 'details':
        return new DetailsPage(selectedUser, onBack);
      default:
        return new ListPage(onUserClick);
    }
  };

  export default pageFactoryInitializer;