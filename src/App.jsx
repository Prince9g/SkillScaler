import React from 'react';
import Navbar from './components/Dashboard/Navbar';
import Bottom from './components/Dashboard/Bottom';
import CreateTest from './components/Dashboard/CreateTest';
import YourTests from './components/Dashboard/YourTests';
import Performance from './components/Dashboard/Performance';
import Profile from './components/Dashboard/Profile';

function App() {
  return (<>
  <Navbar/>
  {/* <Bottom/> */}
  {/* <CreateTest/> */}
  {/* <YourTests/> */}
  {/* <Performance/> */}
  <Profile/>
  </>);
}

export default App;