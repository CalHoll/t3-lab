type ResponseType = {
  id: string;
  desc: string;
};

export type QuestionType = {
  Question: string;
  Responses: ResponseType[];
};

//  This is a better version of TS Enums, more info:
//  https://www.youtube.com/watch?v=jjMbPt_H3RQ&ab_channel=MattPocock
export const WORK_TYPE = {
  INTERIOR: 'INTERIOR',
  EXTERIOR: 'EXTERIOR',
} as const;
type ObjectValues<T> = T[keyof T];
type WorkType = ObjectValues<typeof WORK_TYPE>;

export const INTERIOR_RESPONSES = {
  NEW_BATHROOM: 'NEW_BATHROOM',
  NEW_LAUNDRY: 'NEW_LAUNDRY',
  BATH_REMODEL: 'BATH_REMODEL',
  OTHER_INTERIOR: 'OTHER_INTERIOR',
} as const;
// type ObjectValues<T> = T[keyof T];
export type InteriorRespType = ObjectValues<typeof INTERIOR_RESPONSES>;

export const EXTERIOR_RESPONSES = {
  GARAGE_DOOR_REPLACEMENT: 'GARAGE_DOOR_REPLACEMENT',
  DOORS: 'DOORS',
  REROOF: 'REROOF',
  SHORT_FENCE: 'SHORT_FENCE',
  OTHER_EXTERIOR: 'OTHER_EXTERIOR',
} as const;
// type ObjectValues<T> = T[keyof T];
export type ExteriorRespType = ObjectValues<typeof EXTERIOR_RESPONSES>;

// export const enum InteriorRespType {
//   NewBathroom = 'new_bathroom',
//   NewLaundry = 'new_laundry',
//   BathRemodel = 'bath_remodel',
//   OtherInterior = 'other_interior',
// }
// export const enum ExteriorRespType {
//   GarageDoorReplacement = 'garage_door_replacement',
//   Doors = 'doors',
//   Reroof = 'reroof',
//   ShortFence = 'short_fence',
//   OtherExterior = 'other_exterior',
// }

export const introPrompt: QuestionType = {
  Question: 'What residential work are you doing?',
  Responses: [
    { id: WORK_TYPE.INTERIOR, desc: 'Interior Work' },
    { id: WORK_TYPE.EXTERIOR, desc: 'Exterior Work' },
  ],
};

export const interiorWorkPrompt: QuestionType = {
  Question: 'What interior work are you doing?',
  Responses: [
    { id: INTERIOR_RESPONSES.NEW_BATHROOM, desc: 'New bathroom' },
    { id: INTERIOR_RESPONSES.NEW_LAUNDRY, desc: 'New laundry room' },
    { id: INTERIOR_RESPONSES.BATH_REMODEL, desc: 'Bathroom remodel' },
    { id: INTERIOR_RESPONSES.OTHER_INTERIOR, desc: 'Other' },
  ],
};

export const exteriorWorkPrompt = {
  Question: 'What sort of exterior work are you doing?',
  Responses: [
    {
      id: EXTERIOR_RESPONSES.GARAGE_DOOR_REPLACEMENT,
      desc: 'Garage door replacement',
    },
    { id: EXTERIOR_RESPONSES.DOORS, desc: 'Work on exterior doors' },
    { id: EXTERIOR_RESPONSES.REROOF, desc: 'Re-roofing' },
    {
      id: EXTERIOR_RESPONSES.SHORT_FENCE,
      desc: 'Building fences less than 6 feet',
    },
    { id: EXTERIOR_RESPONSES.OTHER_EXTERIOR, desc: 'Other' },
  ],
};
