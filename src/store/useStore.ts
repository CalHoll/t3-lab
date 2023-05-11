import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import createTodoSlice from './slices/todoSlice';
import createCounterSlice from './slices/counterSlice';
import type ICounter from './types/ICounter';
import type ITodo from './types/ITodo';

const useStore = create<ICounter & ITodo>()(
  devtools(
    persist(
      (...a) => ({
        ...createTodoSlice(...a),
        ...createCounterSlice(...a),
      }),
      { name: 't3-store' }
    )
  )
);

export default useStore;
