import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import createTodoSlice from './slices/todoSlice';
import createCounterSlice from './slices/counterSlice';
import createUserInputsSlice from './slices/userInputsSlice';
import type ICounter from './types/ICounter';
import type ITodo from './types/ITodo';
import type IUserInputs from './types/IUserInputs';

const useStore = create<ICounter & ITodo & IUserInputs>()(
  devtools(
    // persist(
    (...a) => ({
      ...createUserInputsSlice(...a),
      ...createTodoSlice(...a),
      ...createCounterSlice(...a),
    }),
    { name: 't3-store' }
    // )
  )
);

export default useStore;
