import './styles.css';
import { useState } from 'react';
import { GuestListTable, InputField } from './components';

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
    event.preventDefault();
    const newGuest = {
      id: idCounter,
      firstName: firstName,
      lastName: lastName,
      attending: false,
    };
    setGuestList([...guestList, newGuest]);
    setIdCounter(idCounter + 1);
    setFirstName('');
    setLastName('');
    console.log(firstName, lastName);
    event.target.reset();
  };
  const attendChange = (guestId) => {
    const updatedGuestList = guestList.map((guest) => {
      if (guest.id === guestId) {
        return { ...guest, attending: !guest.attending };
      }
      return guest;
    });

    setGuestList(updatedGuestList);
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
        <button style={{ display: 'none' }}>Add Guest</button>
      </form>

      <GuestListTable guestList={guestList} onAttendChange={attendChange} />
    </div>
  );
}
