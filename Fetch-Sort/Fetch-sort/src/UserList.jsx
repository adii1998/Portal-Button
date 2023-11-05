import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    // Function to fetch user data
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://content.newtonschool.co/v1/pr/main/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const toggleSort = () => {
    setSortAsc(!sortAsc);
  };

  const sortedUsers = [...users].sort((a, b) => {
    const nameA = a.name.length;
    const nameB = b.name.length;
    return sortAsc ? nameA - nameB : nameB - nameA;
  });

  return (
    <div className="user-list">
      <h1>Users</h1>
      <button className="fetch-btn" onClick={fetchUsers}>
        Fetch User Data
      </button>
      <button className="sort-btn" onClick={toggleSort}>
        Sort by name length {sortAsc ? '(ascending)' : '(descending)'}
      </button>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <ul>
          {sortedUsers.map((user) => (
            <li key={user.id}>
              <div className="id-section">{user.id}</div>
              <p className="name">{user.name}</p>
              <p className="email">{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
