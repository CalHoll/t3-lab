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
