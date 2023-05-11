import toast from 'react-hot-toast';
import { api, type RouterOutputs } from '~/utils/api';

// import dayjs from "dayjs";

// import relativeTime from "dayjs/plugin/relativeTime";
// dayjs.extend(relativeTime);

// type PostWithUser = RouterOutputs["todo"]["getAll"][number];
type TodosFromDb = RouterOutputs['todo']['getAll'];

export const TodosView = (props: TodosFromDb) => {
  const { todos } = props;

  const ctx = api.useContext();
  const { mutate: deleteFromDb, isLoading: isDeleting } =
    api.todo.delete.useMutation({
      onSuccess: () => {
        void ctx.todo.getAll.invalidate();
      },
      onError: (e) => {
        const errorMessage = e.data?.zodError?.fieldErrors.content;
        if (errorMessage && errorMessage[0]) {
          toast.error(errorMessage[0]);
        } else {
          toast.error('Failed to post! Please try again later.');
        }
      },
    });

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="flex gap-3 border-b border-slate-400 p-4">
          <div className="flex flex-col">
            <span className="text-2xl">{todo.description}</span>
            <button
              onClick={() => deleteFromDb({ id: todo.id })}
              className="text-sm text-slate-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
