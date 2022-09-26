import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import NavBarClient from "../../components/NavBarClient";
import styled from "./ClientHomepage.module.css";

export default function ClientHomepage() {
  const { logOutUser } = useContext(UserContext);

  const logOut = async () => {
    try {
      // Calling the logOutUser function from the user context.
      const loggedOut = await logOutUser();
      // Now we will refresh the page, and the user will be logged out and
      // redirected to the login page because of the <PrivateRoute /> component.
      if (loggedOut) {
        window.location.reload(true);
      }
    } catch (error) {
      alert(error)
    }
  }
  return (
    <>
      <NavBarClient />
      <div className={styled.Screen}>
        <button className={styled.BookADeliveryButton} type="submit">
          Book a Delivery
        </button>
        <button onClick={logOut}>Logout</button>
      </div>
    </>
  );
}
