interface IWorkPermit {
  workType: string;
  interiorWork: Array<string>;
  exteriorWork: Array<string>;
  result: string;
  setWorkType: (workType: string) => void;
  setInteriorWork: (interiorWork: Array<string>) => void;
  setExteriorWork: (exteriorWork: Array<string>) => void;
  setResult: (result: string) => void;
}

export default IWorkPermit;
