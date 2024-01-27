import { useState } from 'react';
import { InputField } from './components';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guestList, setGuestList] = useState([]);

  const test = (event) => {
    setFirstName;
  };

  return (
    <div>
      <h1>Guest List</h1>
      <InputField label="First Name" htmlFor="first-name" />
      <InputField label="Last Name" htmlFor="last-name" />
    </div>
  );
}
