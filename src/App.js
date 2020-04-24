import React from 'react';
import './App.css';
import NavigBar from './components/NavBar';
import CovidForm from './containers/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

   return (
    <div className="App">
      <NavigBar/>
      <header className="App-header">
      <CovidForm/>
      </header>
    </div>
  );
}

export default App;
