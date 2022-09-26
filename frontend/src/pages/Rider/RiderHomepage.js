import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import NavBarRider from "../../components/NavBarRider";
import styled from "./RiderHomepage.module.css";

export default function RiderHomepage() {
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
      <NavBarRider />
      <div className={styled.Screen}>
        <button className={styled.DeliveryOffersButton} type="submit">
          Delivery Offers
        </button>
        <button onClick={logOut}>Logout</button>
      </div>
      <div>
        
      </div>
    </>
  );
}
