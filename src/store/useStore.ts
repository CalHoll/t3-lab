import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import createWorkPermitSlice from './slices/workPermitSlice';
import type IWorkPermit from '~/store/types/IWorkPermit';

const useStore = create<IWorkPermit>()(
  devtools(
    // persist( // TODO: fix React Rehydration issue
    (...a) => ({
      ...createWorkPermitSlice(...a),
    }),
    { name: 't3-store' }
    // )
  )
);

export default useStore;
