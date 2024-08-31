import React, { useState } from 'react';

function ViewEntries({ entries, deleteEntry, editEntry }) {
  const [isEditing, setIsEditing] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '',
    location: '',
    date: '',
    description: ''
  });

  const startEditing = (index, entry) => {
    setIsEditing(index);
    setEditForm(entry);
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (index) => {
    editEntry(index, editForm);
    setIsEditing(null);
  };

  return (
    <div className='div'>
      <h2>View Travel Entries</h2>
      {entries.length === 0 ? (
        <p>No entries found.</p>
      ) : (
        entries.map((entry, index) => (
          <div key={index} className="entry">
            {isEditing === index ? (
              <form onSubmit={() => handleEditSubmit(index)}>
                <div>
                  <label>Title:</label>
                  <input 
                    type="text" 
                    name="title" 
                    value={editForm.title} 
                    onChange={handleEditChange} 
                    required 
                  />
                </div>
                <div>
                  <label>Location:</label>
                  <input 
                    type="text" 
                    name="location" 
                    value={editForm.location} 
                    onChange={handleEditChange} 
                    required 
                  />
                </div>
                <div>
                  <label>Date:</label>
                  <input 
                    type="date" 
                    name="date" 
                    value={editForm.date} 
                    onChange={handleEditChange} 
                    required 
                  />
                </div>
                <div>
                  <label>Description:</label>
                  <textarea 
                    name="description" 
                    value={editForm.description} 
                    onChange={handleEditChange} 
                    required 
                  />
                </div>
                <button type="submit">Save</button>
              </form>
            ) : (
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.location}</p>
                <p>{entry.date}</p>
                <p>{entry.description}</p>
                <button onClick={() => startEditing(index, entry)}>Edit</button>
                <button onClick={() => deleteEntry(index)}>Delete</button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default ViewEntries;
