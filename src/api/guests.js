import { API } from "../constant";
export async function getting_guest() {
  try {
    const response = await fetch(API + "/guests");
    const result = await response.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return [];}
}
export async function getGuest(id) {
  try {
    const response = await fetch(API+"/guests/"+id);
    const result =await response.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return null;
  }
}