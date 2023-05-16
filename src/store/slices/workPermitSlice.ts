import type { StateCreator } from 'zustand';
import type IWorkPermit from '~/store/types/IWorkPermit';

const createWorkPermitSlice: StateCreator<IWorkPermit> = (set) => ({
  workType: '',
  workOptions: [],
  permitResults: '',
  setWorkType: (workType) => set({ workType, workOptions: [] }),
  setWorkOptions: (workOptions) => set({ workOptions }),
  setResult: (permitResults) => set({ permitResults }),
});

export default createWorkPermitSlice;
