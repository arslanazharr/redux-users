import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";

const DeleteUsers = () => {
  const dispatch = useDispatch();
  const removeAll = () => {
    dispatch(deleteUsers());
  };
  return (
    <>
      <button
        onClick={() => {
          removeAll();
        }}
        className="deleteUsers"
      >
        Delete All Users
      </button>
    </>
  );
};

export default DeleteUsers;
