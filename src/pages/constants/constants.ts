export const introPrompt = {
  Question: 'What residential work are you doing?',
  Responses: [
    { id: 'interior', desc: 'Interior Work' },
    { id: 'exterior', desc: 'Exterior Work' },
  ],
};
export const interiorWorkQuestions = [
  {
    Question: 'What interior work are you doing?',
    Responses: [
      { id: 'new_bathroom', desc: 'New bathroom' },
      { id: 'new_laundry', desc: 'New laundry room' },
      { id: 'bath_remodel', desc: 'Bathroom remodel' },
      { id: 'other_interior', desc: 'Other' },
    ],
  },
];

export const interiorOTCWithPlansIds = ['new_bathroom', 'new_laundry'];
export const interiorOTCWithPlansResult =
  'OTC review process with plans is required.';
export const interiorOTCWithoutPlansResult =
  'OTC review process without plans is required.';
// (interiorOTCWithPlansIds.includes(selected.id)) ? interiorOTCWithPlansResult : interiorOTCWithoutPlansResult;

export const exteriorWorkQuestions = [
  {
    Question: 'What sort of exterior work are you doing?',
    Responses: [
      { id: 'grg_repl', desc: 'Garage door replacement' },
      { id: 'doors', desc: 'Work on exterior doors' },
      { id: 'reroof', desc: 'Re-roofing' },
      { id: 'short_fence', desc: 'Building fences less than 6 feet.' },
      { id: 'other_exterior', desc: 'Other' },
    ],
  },
];
