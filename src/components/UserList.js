import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    // Fetch data from the JSONPlaceholder API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleShowList = () => {
    setShowList(prevShowList => !prevShowList); // Toggle showList state
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Users list</h1>
      <button
        style={{ color: 'blue', height: '30px', width: '120px', marginBottom: '20px' }}
        onClick={handleShowList}
      >
        {showList ? 'Hide List' : 'Show List'}
      </button>
      {showList && (
        <div className="user-card-container">
          {listOfUsers.map(user => (
            <div key={user.id} className="user-card">
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Username: {user.username}</p>
              <p>Address: {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
