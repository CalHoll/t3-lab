import React, { useState, type ChangeEventHandler } from 'react';
import 'tailwindcss/tailwind.css';
import { Checkbox } from '~/components/checkbox';
import { RadioButton } from '~/components/radio_button';
import { motion } from 'framer-motion';
import useStore from '~/store/useStore';

import {
  exteriorWorkPrompt,
  interiorWorkPrompt,
  introPrompt,
  WORK_TYPE,
  INTERIOR_RESPONSES,
  EXTERIOR_RESPONSES,
} from '~/pages/constants/constants';

// ! ORIGINAL IMPLEMENTATION

// const getInteriorResult = (workDetailsIds: string[]) => {
//   const interiorRequiresPlansIds = [
//     INTERIOR_RESPONSES.NEW_BATHROOM,
//     INTERIOR_RESPONSES.NEW_LAUNDRY,
//   ];

//   const requiresPlans = interiorRequiresPlansIds.some((id) =>
//     workDetailsIds.includes(id)
//   );

//   const resultMessage = requiresPlans
//     ? 'OTC review process with plans is required.'
//     : 'OTC review process without plans is required.';

//   return resultMessage;
// };

// const getExteriorResult = (workDetailsIds: string[]) => {
//   const inHouseIds = [EXTERIOR_RESPONSES.OTHER_EXTERIOR];
//   const reqPlanIds = [
//     EXTERIOR_RESPONSES.GARAGE_DOOR_REPLACEMENT,
//     EXTERIOR_RESPONSES.DOORS,
//   ];
//   const reqWithoutPlanIds = [EXTERIOR_RESPONSES.REROOF];

//   const _workIdsMatch = (idList: string[]) => {
//     return workDetailsIds.some((id) => idList.includes(id));
//   };

//   if (_workIdsMatch(inHouseIds)) {
//     return 'In-house review process is required';
//   }
//   if (_workIdsMatch(reqPlanIds)) {
//     return 'OTC review process with plans is required.';
//   }
//   if (_workIdsMatch(reqWithoutPlanIds)) {
//     return 'OTC review process without plans is required.';
//   }
//   return 'no building permit is required.';

//   // const requiresPlans = interiorRequiresPlansIds.some((id) =>
//   //   workDetailsIds.includes(id)
//   // );

//   // const resultMessage = requiresPlans
//   //   ? interiorRequiresPlansResult
//   //   : interiorWithoutPlansResult;

//   return `Exterior result message ${workDetailsIds[0] ?? 'no work details'}`;
// };

// const ProjectDetailsResult = () => {
//   const typeOfWork = useStore((state) => state.typeOfWork);
//   const internalWorkIds = useStore((state) => state.internalWorkIds);
//   const externalWorkIds = useStore((state) => state.externalWorkIds);

//   const resultMessage =
//     typeOfWork === WORK_TYPE.INTERIOR
//       ? getInteriorResult(internalWorkIds)
//       : getExteriorResult(externalWorkIds);

//   return (
//     <div className="flex grow flex-col">
//       <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
//         {resultMessage}
//       </h1>
//     </div>
//   );
// };

// const ProjectDetailsPrompt = () => {
//   const typeOfWork = useStore((state) => state.typeOfWork);
//   const internalWorkIds = useStore((state) => state.internalWorkIds);
//   const externalWorkIds = useStore((state) => state.externalWorkIds);
//   const addToInternalIds = useStore((state) => state.addToInternalIds);
//   const removeFromInternalIds = useStore(
//     (state) => state.removeFromInternalIds
//   );
//   const addToExternalIds = useStore((state) => state.addToExternalIds);
//   const removeFromExternal = useStore((state) => state.removeFromExternal);

//   const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
//     const { value, checked } = e.currentTarget;

//     switch (typeOfWork) {
//       case WORK_TYPE.INTERIOR:
//         if (checked) {
//           addToInternalIds(value);
//         } else {
//           removeFromInternalIds(value);
//         }
//         break;
//       case WORK_TYPE.EXTERIOR:
//         if (checked) {
//           addToExternalIds(value);
//         } else {
//           removeFromExternal(value);
//         }
//         break;
//     }
//   };

//   // TODO: set this state to previous prompt data
//   const propData =
//     typeOfWork === WORK_TYPE.INTERIOR ? interiorWorkPrompt : exteriorWorkPrompt;

//   return (
//     <div className="flex grow flex-col">
//       <label
//         htmlFor="interior-or-external"
//         className="mb-2 block py-4 text-sm font-medium text-gray-100"
//       >
//         {propData.Question}
//       </label>
//       <fieldset>
//         <legend className="sr-only">Work Type</legend>
//         {propData.Responses.map((response) => (
//           <div
//             className="mb-4 flex items-center"
//             key={'question-option-' + response.id}
//           >
//             <input
//               id={'details-question'}
//               type="checkbox"
//               name="details-question"
//               value={response.id}
//               onChange={handleCheckboxChange}
//               className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600"
//             />
//             <label
//               htmlFor={'question-option-' + response.id}
//               className="ml-2 block text-sm font-medium text-gray-100 dark:text-gray-300"
//             >
//               {response.desc}
//             </label>
//           </div>
//         ))}
//       </fieldset>
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: {},
//           visible: {},
//         }}
//       >
//         <button
//           hidden={internalWorkIds.length + externalWorkIds.length === 0}
//           onClick={() => {
//             console.log(`internalWorkIds: `, internalWorkIds);
//             console.log(`externalWorkIds: `, externalWorkIds);
//           }}
//         >
//           Next
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// const InteriorOrExternalPrompt = () => {
//   const [radioInput, setInput] = useState('');

//   return (
//     <div className="flex grow flex-col">
//       <label
//         htmlFor="interior-or-external"
//         className="mb-2 block py-4 text-sm font-medium text-gray-100"
//       >
//         {introPrompt.Question}
//       </label>
//       <fieldset>
//         <legend className="sr-only">Work Type</legend>
//         {introPrompt.Responses.map((response) => (
//           <div
//             className="mb-4 flex items-center"
//             key={'question-option-' + response.id}
//           >
//             <input
//               id={'intro-question'}
//               type="radio"
//               name="intro-question"
//               value={response.id}
//               onChange={(e) => {
//                 setInput(e.currentTarget.value);
//               }}
//               className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600"
//             />
//             <label
//               htmlFor={'question-option-' + response.id}
//               className="ml-2 block text-sm font-medium text-gray-100 dark:text-gray-300"
//             >
//               {response.desc}
//             </label>
//           </div>
//         ))}
//       </fieldset>
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: {},
//           visible: {},
//         }}
//       >
//         <button
//           hidden={!radioInput}
//           onClick={() => {
//             console.log(`input value = ${radioInput}`);
//           }}
//         >
//           Next
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// ! NEW IMPLEMENTATION

export const WorkTypeView: React.FC<{ onChange: (value: string) => void }> = ({
  onChange,
}) => {
  return (
    <div className="space-y-2">
      <p className="text-lg font-semibold text-black">
        Is the work inside or outside?
      </p>
      <RadioButton name="workType" value="Interior" onChange={onChange} />
      <RadioButton name="workType" value="Exterior" onChange={onChange} />
    </div>
  );
};

export const InteriorWorkView: React.FC<{
  onChange: (value: string[]) => void;
}> = ({ onChange }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    console.log('handleCheckboxChange, value: ', value);
    const newSelected = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];

    setSelected(newSelected);
    onChange(newSelected);
  };

  return (
    <div className="space-y-2">
      <p className="text-lg font-semibold text-black">
        What interior work are you doing?
      </p>
      <Checkbox
        name="interiorWork"
        value="New bathroom"
        checked={selected.includes('New bathroom')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name="interiorWork"
        value="New laundry room"
        checked={selected.includes('New laundry room')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name="interiorWork"
        value="Bathroom remodel"
        checked={selected.includes('Bathroom remodel')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name="interiorWork"
        value="Other"
        checked={selected.includes('Other')}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export const ExteriorWorkView: React.FC<{
  onChange: (value: string[]) => void;
}> = ({ onChange }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];

    setSelected(newSelected);
    onChange(newSelected);
  };

  return (
    <div className="space-y-2">
      <p className="text-lg font-semibold text-black">
        What exterior work are you doing?
      </p>
      <Checkbox
        name="exteriorWork"
        value="Garage door replacement"
        checked={selected.includes('Garage door replacement')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name="exteriorWork"
        value="Work on exterior doors"
        checked={selected.includes('Work on exterior doors')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name="exteriorWork"
        value="Re-roofing"
        checked={selected.includes('Re-roofing')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name="exteriorWork"
        value="Building fences less than 6 feet"
        checked={selected.includes('Building fences less than 6 feet')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name="exteriorWork"
        value="Other"
        checked={selected.includes('Other')}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};
