import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }

    if (+enteredUserAge < 1) {
      return;
    }

    props.onAddUser(enteredUsername, enteredUserAge);
    setEnteredUsername('');
    setEnteredUserAge('');
  };

  const usernameChangeHandler = (event) => {
    const username = event.target.value;
    setEnteredUsername(username);
  };

  const userAgeChangeHandler = (event) => {
    const userAge = event.target.value;
    setEnteredUserAge(userAge);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={userAgeChangeHandler}
          value={enteredUserAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
