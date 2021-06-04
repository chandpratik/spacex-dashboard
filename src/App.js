import './App.css';
import { Header } from './components';
import { Frame } from './containers';

import { TableContextProvider, PaginationContextProvider } from './context';

const App = () => {
  return (
    <>
      <TableContextProvider>
        <PaginationContextProvider>
          <Header />
          <Frame />
        </PaginationContextProvider>
      </TableContextProvider>
    </>
  );
};

export default App;
