import type { StateCreator } from 'zustand';
import type IUserInputs from '../types/IUserInputs';

const createUserInputsSlice: StateCreator<IUserInputs> = (set, get) => ({
  typeOfWork: '',
  workDetailsIds: [],
  addToDetails(workDetail: string) {
    set((state) => ({ workDetailsIds: [...state.workDetailsIds, workDetail] }));
  },
});

export default createUserInputsSlice;
