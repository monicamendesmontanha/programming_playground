import React from 'react';
import HelloWorld from './HelloWorld';
import HelloUser from './HelloUser';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <HelloUser name="Monica" />
      <HelloUser name="Juliana" />
      <HelloUser name="Renata" />
    </div>
  );
}

export default App;
