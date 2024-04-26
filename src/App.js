import React from 'react';
import './App.css';
import MyTable from './components/table';
import Searchbar from './components/searchbar';
function App() {
  return (
    <div className="App">
    <header class="header"> The Royal Bank of Flatiron </header>
    <Searchbar />
    <MyTable />
    </div>
  );
}

export default App;
