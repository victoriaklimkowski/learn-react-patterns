import PageComponent from './pageComp';
import ListPage from '../pageComps/listPage';
import DetailsPage from '../pageComps/detailsPage';

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