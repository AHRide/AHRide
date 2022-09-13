import React from "react";
import NavBarClient from "../../components/NavBarClient";
import styles from "./ClientProfile.module.css";

function ClientProfile() {
  return (
    <>
      <NavBarClient />
      <div>
        <h1 className={styles.ProfileName}>Anna Karenina</h1>
        <h2 className={styles.DateFont}>Started: August 21, 2022</h2>
        <button className={styles.UpdateInfoButton} type="submit">
          Update Info
        </button>
        <div className={styles.Information}>
          <h1>Female</h1>
          <h1>New York City, USA</h1>
          <h1>094512345678</h1>
          <h1>annakarenina@gmail.com</h1>
        </div>
        <button className={styles.LogoutInfoButton} type="submit">
          logout
        </button>
      </div>
    </>
  );
}

export default ClientProfile;
