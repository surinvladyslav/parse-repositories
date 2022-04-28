import React from 'react';

import List from './components/list/index';
import Loader from './components/loader/index';
import Header from './components/header/index';
import Container from './components/container';

import { useContext } from './context/context';

function App() {
  const { theme, loader } = useContext();
  return (
    <div className={`App ${theme}`}>
      <Header/>
      <main>
        <Container>
          {
            loader ?
            <Loader/> :
            <List/>
          }
        </Container>
      </main>
      {
          !loader &&
          <footer>
              <Container>
                  <p className="afterjs f6 color-fg-muted">
                      © {new Date().getFullYear().toString()} AfterJS, Inc.
                  </p>
              </Container>
          </footer>
      }
    </div>
  );
}

export default App;
