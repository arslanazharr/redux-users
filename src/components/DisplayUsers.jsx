import { useSelector } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <>
      {data.map((user, id) => {
        return (
          <li key={id}>
            <div className="d-flex justify-content-between align-items-center">
              {user}
              <span onClick={() => deleteUser(id)}>❌</span>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default DisplayUsers;
