import { useState, useEffect } from "react";
import { getting_guest } from "../api/guests";
export default function Guest_list({ set_ID }) {
  const [guests, set_guests] = useState([]);
  useEffect(() => {
    const fetchGuests = async () => {
      const data = await getting_guest();
      set_guests(data);
    };
    fetchGuests();
  }, []);
  return (
    <>
      <h1>Guest List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr key={guest.id} onClick={() => set_ID(guest.id)}>
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Select a Guest</p>
    </>
  );
}
