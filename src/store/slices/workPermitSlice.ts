import type { StateCreator } from 'zustand';
import type IWorkPermit from '~/store/types/IWorkPermit';

const createWorkPermitSlice: StateCreator<IWorkPermit> = (set, get) => ({
  workType: '',
  interiorWork: [],
  exteriorWork: [],
  result: '',
  setWorkType: (workType) => set({ workType }),
  setInteriorWork: (interiorWork) => set({ interiorWork }),
  setExteriorWork: (exteriorWork) => set({ exteriorWork }),
  setResult: (result) => set({ result }),

  // ! OLD IMPLEMENTATION
  //   typeOfWork: '',
  //   internalWorkIds: [],
  //   externalWorkIds: [],
  //   addToInternalIds(workId) {
  //     set((state) => ({ internalWorkIds: [...state.internalWorkIds, workId] }));
  //   },
  //   removeFromInternalIds(workId) {
  //     set((state) => ({
  //       internalWorkIds: state.internalWorkIds.filter((el) => el != workId),
  //     }));
  //   },

  //   addToExternalIds(workId) {
  //     set((state) => ({ externalWorkIds: [...state.externalWorkIds, workId] }));
  //   },
  //   removeFromExternal(workId) {
  //     set((state) => ({
  //       externalWorkIds: state.externalWorkIds.filter((el) => el != workId),
  //     }));
  //   },
});

export default createWorkPermitSlice;
