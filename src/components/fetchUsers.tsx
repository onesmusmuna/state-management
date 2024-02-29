import React from "react";

type PGetUsers = {
  getUsers(): void;
};

export const FetchUser: React.FC<PGetUsers> = ({ getUsers }) => {
  return (
    <>
      <h1>Users not found</h1>
      <button onClick={getUsers}>Fetch Users</button>
    </>
  );
};
