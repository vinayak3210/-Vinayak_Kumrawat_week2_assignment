import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AddEntry from './components/AddEntry';
import ViewEntries from './components/ViewEntries';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  const deleteEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  const editEntry = (index, updatedEntry) => {
    const updatedEntries = entries.map((entry, i) =>
      i === index ? updatedEntry : entry
    );
    setEntries(updatedEntries);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-entry">Add Entry</Link>
        <Link to="/view-entries">View Entries</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-entry" element={<AddEntry addEntry={addEntry} />} />
        <Route path="/view-entries" element={
          <ViewEntries 
            entries={entries} 
            deleteEntry={deleteEntry} 
            editEntry={editEntry} 
          />
        }/>
      </Routes>
    </Router>
  );
}

export default App;
