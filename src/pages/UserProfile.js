import { useParams } from "react-router-dom";

import NavBar from "../components/NavBar";

function UserProfile() {
    const {id} = useParams()

  return(
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>User Profile</h1>
        <p>Showing profile for user with ID: {id}</p>
      </main>
    </>
  );
};

export default UserProfile;
