interface IWorkPermit {
  workType: string;
  workOptions: Array<string>;
  permitResults: string;
  setWorkType: (workType: string) => void;
  setWorkOptions: (workType: string, workOptions: Array<string>) => void;
  setResult: (result: string) => void;
}

export default IWorkPermit;
