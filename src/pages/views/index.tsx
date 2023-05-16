import React from 'react';
import 'tailwindcss/tailwind.css';
import { Checkbox } from '~/components/checkbox';
import { RadioButton } from '~/components/radio_button';
import useStore from '~/store/useStore';

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

    setWorkOptions(newSelected);
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
