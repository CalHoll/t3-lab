import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import useStore from '~/store/useStore';

const Todo: NextPage = () => {
  const [todo, setTodo] = useState<string>('');
  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);

  const add = () => {
    addTodo(todo);
  };

  return (
    <>
      <Head>
        <title>T3 App Sample</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#02326d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Todo PAGE
          </h1>

          <div>
            <h1>TODO LIST</h1>
            <input
              type="text"
              onChange={(e) => setTodo(e.currentTarget.value)}
            />
            <button onClick={add}>add</button>
            {todos.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <Link href="/">Home</Link>
        </div>
      </main>
    </>
  );
};

export default Todo;