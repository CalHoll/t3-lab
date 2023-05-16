import type { StateCreator } from 'zustand';
import { getPermitResult } from '~/server/helpers/helpers';
import type IWorkPermit from '~/store/types/IWorkPermit';

const createWorkPermitSlice: StateCreator<IWorkPermit> = (set) => ({
  workType: '',
  workOptions: [],
  permitResults: '',
  setWorkType: (workType) => set({ workType, workOptions: [] }),
  setWorkOptions: (workType, workOptions) =>
    set({ workOptions, permitResults: getPermitResult(workType, workOptions) }),
  setResult: (permitResults) => set({ permitResults }),
});

export default createWorkPermitSlice;
