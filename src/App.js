import { useState } from 'react';
import { InputField } from './components';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guestList, setGuestList] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const guestFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const guestLastName = (event) => {
    setLastName(event.target.value);
  };
  const currentGuestList = guestList;

  const handleFormSubmission = () => {
    const newGuest = {
      id: idCounter,
      firstName: firstName,
      lastName: lastName,
    };
    setGuestList([...guestList, newGuest]);
    setFirstName('');
    setLastName('');
    setIdCounter(idCounter + 1);
  };

  const pressEnter = (event) => {
    if (event.key === 'Enter') {
      handleFormSubmission();
    }
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleFormSubmission();
        }}
      >
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
          onKeyDown={pressEnter}
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
