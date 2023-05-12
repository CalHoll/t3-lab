import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, type ChangeEventHandler } from 'react';
import { motion } from 'framer-motion';

import { api } from '~/utils/api';
import useStore from '~/store/useStore';

import {
  exteriorWorkPrompt,
  interiorRequiresPlansIds,
  interiorWorkPrompt,
  introPrompt,
  WorkType,
  interiorRequiresPlansResult,
  interiorWithoutPlansResult,
} from './constants/constants';

const getInteriorResult = (workDetailsIds: string[]) => {
  const requiresPlans = interiorRequiresPlansIds.some((id) =>
    workDetailsIds.includes(id)
  );

  const resultMessage = requiresPlans
    ? interiorRequiresPlansResult
    : interiorWithoutPlansResult;

  return resultMessage;
};

const getExteriorResult = (workDetailsIds: string[]) => {
  // const requiresPlans = interiorRequiresPlansIds.some((id) =>
  //   workDetailsIds.includes(id)
  // );

  // const resultMessage = requiresPlans
  //   ? interiorRequiresPlansResult
  //   : interiorWithoutPlansResult;

  return `Exterior result message ${workDetailsIds[0] ?? 'no work details'}`;
};

const ProjectDetailsResult = () => {
  const workDetailsIds = useStore((state) => state.workDetailsIds);
  const typeOfWork = useStore((state) => state.typeOfWork);
  const resultMessage =
    typeOfWork === WorkType.Interior
      ? getInteriorResult(workDetailsIds)
      : getExteriorResult(workDetailsIds);

  return (
    <div className="flex grow flex-col">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        {resultMessage}
      </h1>
    </div>
  );
};

const ProjectDetailsPrompt = () => {
  const typeOfWork = useStore((state) => state.typeOfWork);
  const workDetailsIds = useStore((state) => state.workDetailsIds);
  const addToDetails = useStore((state) => state.addToDetails);

  // TODO: set this state to previous prompt data
  const propData =
    typeOfWork === WorkType.Interior ? interiorWorkPrompt : exteriorWorkPrompt;

  return (
    <div className="flex grow flex-col">
      <label
        htmlFor="interior-or-external"
        className="mb-2 block py-4 text-sm font-medium text-gray-100"
      >
        {propData.Question}
      </label>
      <fieldset>
        <legend className="sr-only">Work Type</legend>
        {propData.Responses.map((response) => (
          <div
            className="mb-4 flex items-center"
            key={'question-option-' + response.id}
          >
            <input
              id={'details-question'}
              type="checkbox"
              name="details-question"
              value={response.id}
              onChange={(e) => {
                // TODO: update the store with the response
                // setInput(e.currentTarget.value);
                addToDetails(e.currentTarget.value);
              }}
              className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600"
            />
            <label
              htmlFor={'question-option-' + response.id}
              className="ml-2 block text-sm font-medium text-gray-100 dark:text-gray-300"
            >
              {response.desc}
            </label>
          </div>
        ))}
      </fieldset>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        <button
          hidden={workDetailsIds.length === 0}
          onClick={() => {
            console.log(`workDetailsIds value = `, workDetailsIds);
          }}
        >
          Next
        </button>
      </motion.div>
    </div>
  );
};

const InteriorOrExternalPrompt = () => {
  const [radioInput, setInput] = useState('');

  return (
    <div className="flex grow flex-col">
      <label
        htmlFor="interior-or-external"
        className="mb-2 block py-4 text-sm font-medium text-gray-100"
      >
        {introPrompt.Question}
      </label>
      <fieldset>
        <legend className="sr-only">Work Type</legend>
        {introPrompt.Responses.map((response) => (
          <div
            className="mb-4 flex items-center"
            key={'question-option-' + response.id}
          >
            <input
              id={'intro-question'}
              type="radio"
              name="intro-question"
              value={response.id}
              onChange={(e) => {
                setInput(e.currentTarget.value);
              }}
              className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600"
            />
            <label
              htmlFor={'question-option-' + response.id}
              className="ml-2 block text-sm font-medium text-gray-100 dark:text-gray-300"
            >
              {response.desc}
            </label>
          </div>
        ))}
      </fieldset>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        <button
          hidden={!radioInput}
          onClick={() => {
            console.log(`input value = ${radioInput}`);
          }}
        >
          Next
        </button>
      </motion.div>
    </div>
  );
};

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: 'from tRPC' });

  // const userId = 'user123';
  // const introResponse = [];
  // const typeOfWorkIds = [];
  // const [radioInput, setInput] = useState('');

  // useEffect(() => {
  //   console.log(`input value = ${radioInput}`);
  // }, [radioInput]);

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
            Hello <span className="text-[hsl(234,100%,70%)]">World</span>
          </h1>
          <InteriorOrExternalPrompt />
          {/* // TODO: update the store with the response */}
          {true && <ProjectDetailsPrompt />}
          {true && <ProjectDetailsResult />}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/about"

              // state={ from: "occupation" }
            >
              <h3 className="text-2xl font-bold">About Page →</h3>
              <div className="text-lg">Routing with static url</div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href={'/some-random-route' + `${Date.now()}`}
            >
              <h3 className="text-2xl font-bold">Test Slugs →</h3>
              <div className="text-lg">/other-random-routes</div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/todo"
            >
              <h3 className="text-2xl font-bold">Todo →</h3>
              <div className="text-lg">/todo</div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/todo_db"
            >
              <h3 className="text-2xl font-bold">Todo-DB →</h3>
              <div className="text-lg">/todo_db</div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/counter"
            >
              <h3 className="text-2xl font-bold">Counter →</h3>
              <div className="text-lg">/counter</div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
