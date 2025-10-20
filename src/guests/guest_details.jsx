import { useState, useEffect } from "react";
import { getGuest } from "../api/guests";
export default function Guest_details({ guestId, set_ID }) {
  const [guest, setGuest] = useState(null);
  useEffect(() => {
    const fetchGuest = async () => {
      const data = await getGuest(guestId);
      setGuest(data);
    };
    fetchGuest();
  }, [guestId]);
  if (!guest) return <p>Loading...</p>;
  return (
    <article className="guest-details">
      <h1>{guest.name}</h1>
      <address>
        <p>{guest.email}</p>
        <p>{guest.phone}</p>
      </address>
      <p>{guest.job}</p>
      <p>{guest.bio}</p>
      <button onClick={() => set_ID(null)}>Back</button>
    </article>
  );
}
