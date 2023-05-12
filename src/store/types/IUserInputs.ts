interface IUserInputs {
  typeOfWork: string;
  workDetailsIds: Array<string>;
  addToDetails: (todo: string) => void;
}

export default IUserInputs;
