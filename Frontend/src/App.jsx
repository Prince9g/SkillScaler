import React from 'react';
import Navbar from './components/Dashboard/Navbar';
import Bottom from './components/Dashboard/Bottom';
import CreateTest from './components/Dashboard/CreateTest';
import YourTests from './components/Dashboard/YourTests';
import Performance from './components/Dashboard/Performance';
import Profile from './components/Dashboard/Profile';
import { Outlet } from 'react-router-dom';
// import Create from './components/Create';

function App() {
  return (<>
  <Navbar/>
  <Outlet/>
  {/* <Create/> */}
  {/* <Outlet/> */}
  </>);
}

export default App;