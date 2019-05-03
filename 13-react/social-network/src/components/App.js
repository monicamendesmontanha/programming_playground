import React from 'react';
import Clock from './Clock';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Clock />
      <Profile name="Groucho" age="101" motto="No gods no master" pic="https://fillmurray.com/200/300"/>
      <Profile name="Harpo" age="98" motto="No gods no master" pic="https://fillmurray.com/200/300"/>
      <Profile name="Chico" age="99" motto="No gods no master" pic="https://fillmurray.com/200/300"/>
    </div>
  );
}

export default App;
