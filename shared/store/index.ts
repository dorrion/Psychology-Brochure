import { StateCreator } from 'zustand';
import { ModalStore } from './type';

export const Modal: StateCreator<ModalStore> = (set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
});
