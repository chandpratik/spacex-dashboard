import './App.css';
import { Header } from './components';
import { Frame } from './containers';
import GithubCorner from 'react-github-corner';

import { TableContextProvider, PaginationContextProvider } from './context';

const App = () => {
  return (
    <>
      <TableContextProvider>
        <PaginationContextProvider>
          <Header />
          <Frame />
          <GithubCorner
            href={'https://github.com/chandpratik/spacex-dashboard'}
            bannerColor="#151513"
            octoColor="#fff"
            size={100}
            direction="right"
          />
        </PaginationContextProvider>
      </TableContextProvider>
    </>
  );
};

export default App;
