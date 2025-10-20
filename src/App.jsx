import { useState } from "react";
import Guest_details from "./guests/guest_details";
import Guest_list from "./guests/guest_list";
export default function App() {
  const [guestId, set_ID] = useState(null);
  return (
    <main>
      {guestId ? (
        <Guest_details guestId={guestId} set_ID={set_ID} />
      ) : (
        <Guest_list set_ID={set_ID} />
      )}
    </main>
  );
}
