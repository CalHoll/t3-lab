import React from 'react';
import 'tailwindcss/tailwind.css';
import { type NextPage } from 'next';
import Head from 'next/head';
import useStore from '~/store/useStore';
import { Checkbox } from '~/components/checkbox';
import { RadioButton } from '~/components/radio_button';
import { getWorkTypeData } from '~/server/helpers/helpers';
import { permitFormConfig } from '~/server/data/data';

export const WorkTypeView: React.FC<{ onChange: (value: string) => void }> = ({
  onChange,
}) => {
  const firstPrompt = permitFormConfig.label;
  const typesOfWork = permitFormConfig.typeOfWork;

  return (
    <div className="space-y-2">
      <p className="text-lg font-semibold text-black">{firstPrompt}</p>
      {typesOfWork.map((typeOfWork) => (
        <RadioButton
          key={typeOfWork.title}
          name="workType"
          value={typeOfWork.title}
          label={typeOfWork.title}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export const WorkOptionsView = () => {
  const { workType, workOptions, setWorkOptions } = useStore((state) => state);

  const workTypeData = getWorkTypeData(workType);
  const workTitle = workTypeData.label;
  const workTypeOptions = workTypeData.options;
  const questions = workTypeOptions.questions;

  // TODO: handle questionsType == 'radio' and 'checkbox'
  // const questionsType = workTypeOptions.type;

  const handleCheckboxChange = (value: string) => {
    const newSelected = workOptions.includes(value)
      ? workOptions.filter((v) => v !== value)
      : [...workOptions, value];

    setWorkOptions(workType, newSelected);
  };

  return (
    <div className="space-y-2">
      <p className="text-lg font-semibold text-black">{workTitle}</p>

      {questions.map((option) => (
        <Checkbox
          key={option.id}
          name="workOption"
          value={option.id}
          label={option.label}
          checked={workOptions.includes(option.id)}
          onChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
};

export const InHouseReview = () => (
  <OptionList
    title="In-House Review Process"
    items={[
      'A building permit is required.',
      'Include plan sets.',
      'Submit application for in-house review.',
    ]}
  />
);

interface OtcSubmissionProps {
  withPlans: boolean;
}

export const OtcSubmission: React.FC<OtcSubmissionProps> = ({ withPlans }) => {
  return (
    <OptionList
      title="Over-the-Counter Submission Process"
      items={[
        'A building permit is required.',
        ...(withPlans ? ['Include plan sets.'] : []),
        'Submit application for OTC review.',
      ]}
    />
  );
};

export const NoPermit = () => (
  <OptionList
    title="No Permit"
    items={['Nothing is required! You’re set to build.']}
  />
);

interface ListProps {
  title: string;
  items: string[];
}

const OptionList: React.FC<ListProps> = ({ title, items }) => (
  <div className="mb-4 rounded bg-white p-4 shadow">
    <h2 className="mb-2 text-xl font-bold text-gray-800">{title}</h2>
    <ul className="list-disc pl-5 text-gray-700">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Home: NextPage = () => {
  const { workType, permitResults, setWorkType } = useStore((state) => state);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Connect DB
    return;
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
          <div className="min-w-[50%] space-y-5 rounded-xl bg-white p-8 shadow-lg">
            <h1 className="text-center text-2xl font-bold text-blue-700">
              Permit Finder
            </h1>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <WorkTypeView onChange={setWorkType} />
              {workType.length > 0 && <WorkOptionsView />}
            </form>
            {permitResults === 'IN_HOUSE_REVIEW' && <InHouseReview />}
            {(permitResults === 'OTC_WITH_PLANS' ||
              permitResults === 'OTC_NO_PLANS') && (
              <OtcSubmission withPlans={permitResults === 'OTC_WITH_PLANS'} />
            )}
            {permitResults === 'NO_PERMIT_REQUIRED' && <NoPermit />}

            {/* <button
                  type="submit"
                  className="w-full rounded bg-blue-700 px-4 py-2 text-lg text-white hover:bg-blue-800"
                >
                  Submit
                </button> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
