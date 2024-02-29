import React from "react";
import { IUser } from "../stores/users";

type PIusers = {
  users: IUser[];
};

export const UserList: React.FC<PIusers> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>Name: {user.name}</li>
      ))}
    </ul>
  );
};
