export function InputField({ htmlFor, label, onChange, value }) {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input onChange={onChange} value={value} />
    </div>
  );
}

export function GuestListTable({ guestList, onAttendChange }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Attending</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {guestList.map((guest) => (
          <tr key="guest.id">
            <td>{guest.id}</td>
            <td>{guest.firstName}</td>
            <td>{guest.lastName}</td>
            <td>
              <input
                type="checkbox"
                checked={guest.attending}
                onChange={() => onAttendChange(guest.id)}
                aria-label={`${guest.firstName} ${guest.lastName} attending status`}
              />
              {guest.attending ? ' Yes' : ' No'}
            </td>
            <td>
              <button type="button">Remove guest</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
