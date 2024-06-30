import { create } from "zustand";

const useFileStore = create((set) => ({
  file: 0,
  setFile: (newFile) => set({ file: newFile }),
}));

export default useFileStore;
