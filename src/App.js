import { useState } from 'react';
import { InputField } from './components';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guestList, setGuestList] = useState([]);

  const guestFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const guestLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleFormSubmission = () => {
    const userFirstName = firstName;
    const userLastName = lastName;
  };

  return (
    <div>
      <div>
        <h1>Guest List</h1>
        <InputField
          label="First Name"
          htmlFor="first-name"
          onChange={guestFirstName}
        />
        <InputField
          label="Last Name"
          htmlFor="last-name"
          onChange={guestLastName}
        />
      </div>

      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        />
      </div>
    </div>
  );
}
