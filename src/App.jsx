import {useState} from "react";
import guest_details from "./guests/guest_details";
import guest_list from "./guests/guest_list";
export default function App() {
  const [guestId, set_ID] = useState(null);
  return (
    <main>
      {guestId ? (
        <guest_details guestId={guestId}set_ID={set_ID} />
      ) : (
        <guest_list set_ID={set_ID} />
      )}
    </main>
  );
}