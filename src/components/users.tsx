import { useUser } from "../stores/users";
import { UserList } from "./userList";
import { FetchUser } from "./fetchUsers";

export function Users() {
  const users = useUser((state) => state.users);
  const getUsers = useUser((state) => state.getUsers);

  if (!users) {
    return <FetchUser getUsers={getUsers} />;
  } else {
    return <UserList users={users} />;
  }
}
