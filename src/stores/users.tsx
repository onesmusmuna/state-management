import { create } from "zustand";

export type IUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
};

export interface Iusers {
  users?: IUser[];

  getUsers(): void;
}

export const useUser = create<Iusers>((set) => ({
  getUsers: async () => {
    const getUsers = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await getUsers.json();

    set({ users: response });
  },
}));
