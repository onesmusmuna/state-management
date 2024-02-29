import { create } from "zustand";

interface ICounter {
  count: number;
}

export const useCounter = create<ICounter>(() => ({
  count: 0,
}));
