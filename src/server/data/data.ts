export type ResultMapType = {
  criteriaType: string;
  criteria: string[];
  result: string;
};

export type QuestionType = {
  id: string;
  label: string;
};

export type WorkOptionType = {
  title: string;
  label: string;
  options: {
    type: string;
    questions: QuestionType[];
  };
  resultsMap: ResultMapType[];
};

export type PermitFormType = {
  version: number;
  title: string;
  label: string;
  typeOfWork: WorkOptionType[];
};

export const permitFormConfig: PermitFormType = {
  version: 1,
  title: 'Permit Finder',
  label: 'Is the work inside or outside?',
  typeOfWork: [
    {
      title: 'Interior',
      label: 'What interior work are you doing?',
      options: {
        type: 'multi', // select or multi (checkbox or radio)
        questions: [
          {
            id: 'NEW_BATHROOM', // TODO: set up with as enum or similar (also switch 'type')
            label: 'New bathroom',
          },
          {
            id: 'NEW_LAUNDRY',
            label: 'New laundry room',
          },
          {
            id: 'BATH_REMODEL',
            label: 'Bathroom remodel',
          },
          {
            id: 'OTHER_INTERIOR',
            label: 'Other',
          },
        ],
      },
      resultsMap: [
        // resultsMap is checked in order, put highest priority results first
        {
          criteriaType: 'ANY', // criteriaType can be ALL, ANY, or NONE
          criteria: ['NEW_BATHROOM', 'NEW_LAUNDRY'],
          result: 'OTC review process with plans is required',
        },
        {
          criteriaType: 'NOT_EMPTY', // criteriaType can be ALL, ANY, NONE, NOT_EMPTY
          criteria: [],
          result: 'An OTC review process without plans is required',
        },
      ],
    },
    {
      title: 'Exterior',
      label: 'What exterior work are you doing?',
      options: {
        type: 'multi', // select or multi (checkbox or radio)
        questions: [
          {
            id: 'GARAGE_DOOR_REPLACEMENT',
            label: 'Garage door replacement',
          },
          {
            id: 'DOORS',
            label: 'Work on exterior doors',
          },
          {
            id: 'REROOF',
            label: 'Re-roofing',
          },
          {
            id: 'SHORT_FENCE',
            label: 'Building fences less than 6 feet',
          },
          {
            id: 'OTHER_EXTERIOR',
            label: 'Other',
          },
        ],
      },
      resultsMap: [
        // resultsMap is checked in order, put highest priority results first
        {
          criteriaType: 'ANY', // criteriaType can be ALL, ANY, NONE, NOT_EMPTY
          criteria: ['OTHER_EXTERIOR'],
          result: 'An in-house review process is required.',
        },
        {
          criteriaType: 'ANY', // criteriaType can be ALL, ANY, or NONE
          criteria: ['GARAGE_DOOR_REPLACEMENT', 'DOORS'],
          result: 'OTC review process with plans is required',
        },
        {
          criteriaType: 'ANY', // criteriaType can be ALL, ANY, or NONE
          criteria: ['REROOF'],
          result: 'OTC review process without plans is required',
        },
        {
          criteriaType: 'ANY', // criteriaType can be ALL, ANY, NONE, NOT_EMPTY
          criteria: ['SHORT_FENCE'],
          result: 'No building permit is required',
        },
      ],
    },
  ],
};
