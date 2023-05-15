// import {
//   type ExteriorRespType,
//   type InteriorRespType,
// } from '~/pages/constants/constants';

interface IUserInputs {
  typeOfWork: string;
  internalWorkIds: Array<string>;
  externalWorkIds: Array<string>;
  addToInternalIds: (workId: string) => void;
  removeFromInternalIds: (workId: string) => void;
  addToExternalIds: (workId: string) => void;
  removeFromExternal: (workId: string) => void;
  // internalWorkIds: Array<InteriorRespType>;
  // externalWorkIds: Array<ExteriorRespType>;
  // addToInternalIds: (workId: InteriorRespType) => void;
  // removeFromInternalIds: (workId: InteriorRespType) => void;
  // addToExternalIds: (workId: ExteriorRespType) => void;
  // removeFromExternal: (workId: ExteriorRespType) => void;
}

export default IUserInputs;
