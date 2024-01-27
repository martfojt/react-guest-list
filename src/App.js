import { useState } from 'react';
import { InputField } from './components';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guestList, setGuestList] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const guestFirstName = (event) => {
    setFirstName(event.target.value);
    console.log(firstName);
  };

  const guestLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleFormSubmission = (event) => {
    const newGuest = {
      id: idCounter,
      firstName: firstName,
      lastName: lastName,
    };
    setGuestList([...guestList, newGuest]);
    setIdCounter(idCounter + 1);
    setFirstName('');
    setLastName('');
    console.log(firstName, lastName);
    event.target.reset();
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleFormSubmission(event);
        }}
      >
        <h1>Guest List</h1>
        <InputField
          label="First Name"
          htmlFor="first-name"
          onChange={guestFirstName}
          value={firstName}
        />
        <InputField
          label="Last Name"
          htmlFor="last-name"
          onChange={guestLastName}
          value={lastName}
        />
        <button>Add Guest</button>
      </form>

      <div>
        <ul>
          {guestList.map((guest) => (
            <li key={guest.id}>
              {`Guest ${guest.id}: ${guest.firstName} ${guest.lastName}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
