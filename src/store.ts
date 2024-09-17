import { create } from 'zustand';

interface State {
  loggedIn: boolean;
  updateLoggedInStatus: (status: boolean) => void;
}

export const useLoggedInStore = create<State>((set) => ({
  loggedIn: false,
  updateLoggedInStatus: (status: boolean) => set({ loggedIn: status }),
}));
