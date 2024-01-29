import './styles.css';
import { useState } from 'react';
import { GuestListTable, InputField } from './components';

export default function App() {
  // State variables for guest list
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guestList, setGuestList] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const baseUrl = 'http://localhost:4000';

  //   const response = await fetch(`${baseUrl}/guests`);
  // const allGuests = await response.json();

  // First name input update
  const guestFirstName = (event) => {
    setFirstName(event.target.value);
    // console.log(firstName);
  };

  // Last name input update
  const guestLastName = (event) => {
    setLastName(event.target.value);
  };

  // Handle form submission
  const handleFormSubmission = (event) => {
    event.preventDefault();
    const newGuest = {
      id: idCounter,
      firstName: firstName,
      lastName: lastName,
      attending: false,
    };
    setGuestList([...guestList, newGuest]); // Add new guest to list
    setIdCounter(idCounter + 1); // ID counter
    setFirstName(''); // Reset first name
    setLastName(''); // Reset last name
    // console.log(firstName, lastName);
    event.target.reset(); // Reset form fields
  };

  //   async function addGuest () {const response = await fetch(`http://localhost:4000/guests`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ firstName: firstName, lastName: lastName }),
  // });
  // const createdGuest = await response.json();}

  // Attending status checkbox toggle
  const attendChange = (guestId) => {
    const updatedGuestList = guestList.map((guest) => {
      if (guest.id === guestId) {
        return { ...guest, attending: !guest.attending };
      }
      return guest;
    });

    setGuestList(updatedGuestList);
  };

  // Remove guest from guest list
  const removeGuest = (guestId) => {
    const updatedGuestList = guestList.filter((guest) => {
      return guest.id !== guestId;
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

      <GuestListTable
        guestList={guestList}
        onAttendChange={attendChange}
        onRemoveGuest={removeGuest}
      />
    </div>
  );
}
