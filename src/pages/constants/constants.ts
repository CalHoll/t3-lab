type ResponseType = {
  id: string;
  desc: string;
};

export type QuestionType = {
  Question: string;
  Responses: ResponseType[];
};

export const enum WorkType {
  Interior = 'interior',
  Exterior = 'exterior',
}

export const introPrompt: QuestionType = {
  Question: 'What residential work are you doing?',
  Responses: [
    { id: WorkType.Interior, desc: 'Interior Work' },
    { id: WorkType.Exterior, desc: 'Exterior Work' },
  ],
};

export const interiorWorkPrompt: QuestionType = {
  Question: 'What interior work are you doing?',
  Responses: [
    { id: 'new_bathroom', desc: 'New bathroom' },
    { id: 'new_laundry', desc: 'New laundry room' },
    { id: 'bath_remodel', desc: 'Bathroom remodel' },
    { id: 'other_interior', desc: 'Other' },
  ],
};

export const interiorRequiresPlansIds = ['new_bathroom', 'new_laundry'];
export const interiorRequiresPlansResult =
  'OTC review process with plans is required.';
export const interiorWithoutPlansResult =
  'OTC review process without plans is required.';

export const exteriorWorkPrompt = {
  Question: 'What sort of exterior work are you doing?',
  Responses: [
    { id: 'grg_repl', desc: 'Garage door replacement' },
    { id: 'doors', desc: 'Work on exterior doors' },
    { id: 'reroof', desc: 'Re-roofing' },
    { id: 'short_fence', desc: 'Building fences less than 6 feet.' },
    { id: 'other_exterior', desc: 'Other' },
  ],
};

// Exterior Logic
// If ‘Other’ is selected, then an in-house review process is required.
// Else if (answers <= ii), OTC review process with plans is required.
// Else if (answer = iii), OTC review process without plans is required.
// Else (i.e. answer = 4), then no building permit is required.
