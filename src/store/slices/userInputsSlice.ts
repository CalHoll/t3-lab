import type { StateCreator } from 'zustand';
import type IUserInputs from '../types/IUserInputs';

const createUserInputsSlice: StateCreator<IUserInputs> = (set, get) => ({
  typeOfWork: '',
  internalWorkIds: [],
  externalWorkIds: [],
  addToInternalIds(workId) {
    set((state) => ({ internalWorkIds: [...state.internalWorkIds, workId] }));
  },
  removeFromInternalIds(workId) {
    set((state) => ({
      internalWorkIds: state.internalWorkIds.filter((el) => el != workId),
    }));
  },

  addToExternalIds(workId) {
    set((state) => ({ externalWorkIds: [...state.externalWorkIds, workId] }));
  },
  removeFromExternal(workId) {
    set((state) => ({
      externalWorkIds: state.externalWorkIds.filter((el) => el != workId),
    }));
  },
});

export default createUserInputsSlice;
