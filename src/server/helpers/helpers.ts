import {
  type WorkOptionType,
  type ResultMapType,
  permitFormConfig,
} from '~/server/data/data';

export const getWorkTypeData = (workType: string): WorkOptionType => {
  if (!workType) {
    throw new Error("Work Type can't be empty, Internal Error");
  }
  const workTypeQuestions = permitFormConfig.typeOfWork;
  const selectedTypeOfWork = workTypeQuestions.filter(
    (e) => e.title === workType
  )[0];
  if (!selectedTypeOfWork) {
    throw new Error('Invalid Work Type, Internal Error');
  }

  return selectedTypeOfWork;
};

export const getResultMapForWorkType = (workType: string): ResultMapType[] => {
  if (!workType) {
    throw new Error("Work Type can't be empty, Internal Error");
  }

  const selectedTypeOfWork = getWorkTypeData(workType);
  const resultsMap = selectedTypeOfWork.resultsMap;
  return resultsMap;
};

const _allMatch = (criteria: string[], workOptions: string[]) => {
  return criteria.every((e) => {
    return workOptions.indexOf(e) >= 0;
  });
};

const _anyMatch = (criteria: string[], workOptions: string[]) => {
  return criteria.some((e) => {
    return workOptions.includes(e);
  });
};

const _noneMatch = (criteria: string[], workOptions: string[]) => {
  return criteria.every((e) => {
    return workOptions.indexOf(e) < 0;
  });
};

export const getPermitResult = (
  workType: string,
  workOptions: string[]
): string => {
  const resultsMap = getResultMapForWorkType(workType);

  console.log('state updated workType = ', workType);
  console.log('state updated workOptions = ', workOptions);
  console.log('state updated resultsMap = ', resultsMap);

  for (const resultOption of resultsMap) {
    const criteriaType = resultOption.criteriaType;
    const criteria = resultOption.criteria;

    switch (criteriaType) {
      case 'ALL':
        if (_allMatch(criteria, workOptions)) {
          return resultOption.result;
        }
        break;
      case 'ANY':
        if (_anyMatch(criteria, workOptions)) {
          return resultOption.result;
        }
        break;
      case 'NONE':
        if (_noneMatch(criteria, workOptions)) {
          return resultOption.result;
        }
        break;
      case 'NOT_EMPTY':
        if (workOptions.length !== 0) {
          return resultOption.result;
        }
        break;
      default:
        throw new Error('Invalid criteriaType, Internal Error');
    }
  }
  return '';
};
