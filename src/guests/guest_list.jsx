import {useState,useEffect} from "react";
import {getting_guest} from "../api/guests";
export default function guest_lists({ guest_Id }) {
  const [guests, set_guests] = useState([]);
  useEffect(() => {
    const sync_guest = async () => {const data = await getting_guest();
      set_guests(data);
    };
    sync_guest();
  }, []);
  return (
    <><h1>Guest List</h1>
      <table>
        <thead>
          <tr><th>Name</th><th>Email</th><th>Phone</th></tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr key={guest.id} onClick={() => guest_Id(guest.id)}>
              <td>{guest.name}</td><td>{guest.email}</td><td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Select A GUest</p>
    </>
  );
}