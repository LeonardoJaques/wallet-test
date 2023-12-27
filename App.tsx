import React from 'react';
import Routes from '@routes/index';
import {AuthProvider} from '@contexts/index';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
