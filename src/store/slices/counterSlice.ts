import type { StateCreator } from 'zustand';
import type ICounter from '~/store/types/ICounter';

const createCounterSlice: StateCreator<ICounter> = (set, get) => ({
  counter: 0,
  increase(increaseBy: number) {
    set((state) => ({ counter: state.counter + increaseBy }));
  },
});

export default createCounterSlice;
