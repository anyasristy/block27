import {getGuest} from "../api/guests";
import {useState,useEffect} from "react";
export default function details({guestId,guest_Id}){
  const[guest,setGuest]=useState(null);
  useEffect(() => {const guest_sync = async () => {
      const data = await getGuest(guestId);
      setGuest(data);
    };
    guest_sync();
  }, [guestId]);
  if (!guest) return <p>Loading...</p>;
  return (
    <article className="guest-details">
      <h1>{guest.name}</h1>
      <address>
        {guest.email}
        {guest.phone}
      </address>
      <p>{guest.job}</p><p>{guest.bio}</p>
      <button onClick={() => guest_Id(null)}>Back</button>
    </article>
  );
}