import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import ActivityItemList from './components/ActivityItemList';
import ProjectList from './components/ProjectList';
import './App.css';


function App() {
  

  //const profileList = profile.map(prof => (<Profile prof={prof} />))
  return (
    <div className="App">
      <Header id='search' />
      <section className="row">
        <Profile />
        <ProjectList />
        <ActivityItemList />
      </section>
    </div>
  );
}

export default App;
