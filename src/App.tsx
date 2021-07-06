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
        <Profile name='Debbie Lewis' username='debbielewis' membership='Pro Member' githubUrl='https://example.com/debbielewis' projectCount='8' avatar= 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80' />
        <ProjectList />
        <ActivityItemList />
      </section>
    </div>
  );
}

export default App;
