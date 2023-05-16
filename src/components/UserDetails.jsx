import { useDispatch } from "react-redux";
import DeleteUsers from "./DeleteUsers";
import "../index.css";
import { addUser } from "../store/slices/UserSlice";
import DisplayUsers from "../components/DisplayUsers";
import { fakeUserData } from "../api";

const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div class="d-flex align-items-center">
            <h3>List of User Details</h3>
            <button
              className="addUser"
              onClick={() => addNewUser(fakeUserData())}
            >
              Add New User
            </button>
            <DeleteUsers />
          </div>
        </div>
      </div>
      <hr />
      <DisplayUsers />
    </>
  );
};

export default UserDetails;
