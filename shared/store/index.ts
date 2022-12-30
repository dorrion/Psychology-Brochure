import create from 'zustand';
import { Modal } from './type';

export const ModalStore = create<Modal>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
