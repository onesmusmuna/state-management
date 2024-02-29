import { useCounter } from "./stores/counter";
import { useUser } from "./stores/users";
import "./App.css";

function App() {
  return (
    <>
      <ZudstandConter />

      <Users />
    </>
  );
}

function ZudstandConter() {
  const counter = useCounter();
  const addOne = useCounter((state) => state.increment);
  const minusOne = useCounter((state) => state.decrement);

  return (
    <>
      <h2>Zudstand State Management</h2>
      <p>{counter.count}</p>

      <button onClick={addOne}>Add One</button>
      <button onClick={minusOne}>Minus One</button>
    </>
  );
}

function Users() {
  const users = useUser((state) => state.users);
  const getUsers = useUser((state) => state.getUsers);

  if (!users) {
    return (
      <>
        <h1>Users not found</h1>
        <button onClick={getUsers}>Fetch Users</button>
      </>
    );
  }

  const UserList = () => {
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>Name: {user.name}</li>
        ))}
      </ul>
    );
  };

  return <UserList />;
}

export default App;
