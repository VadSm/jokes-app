import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

import JokeContainer from 'components/JokeContainer';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <JokeContainer />
    </div>
  </Provider>
);

export default App;
