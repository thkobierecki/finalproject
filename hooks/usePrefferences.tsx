import { useReducer } from "react";
const initialState = {
  searchStatus: 0,
  isRemote: 1,
  seniority: 1,
  employmentType: 0,
  location: [1],
  companyStage: 0,
  companyType: 0,
  industryType: [1],
  mainTech: [1],
  techSkills: [1],
  minSalary: 30000,
  maxSalary: 50000,
};
type State = {
  searchStatus: number;
  isRemote: number;
  seniority: number;
  employmentType: number;
  location: number[];
  companyStage: number;
  companyType: number;
  industryType: number[];
  mainTech: number[];
  techSkills: number[];
  minSalary: number;
  maxSalary: number;
};
export type KeyType = keyof State;
type Action = {
  type: ACTION_TYPES.UPDATE_SINGLE;
  key: KeyType;
  value: number | number[];
};
enum ACTION_TYPES {
  UPDATE_SINGLE = "UPDATE_SINGLE",
}
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_SINGLE:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export const usePrefferences = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChangeSingleValue = (key: KeyType, value: number) =>
    dispatch({ type: ACTION_TYPES.UPDATE_SINGLE, key, value });

  const handleChangeMultiValue = (key: KeyType, value: number) => {
    if (isPresentInArray(key, value)) {
      const filteredArray = (state[key] as number[]).filter(
        (item) => item !== value
      );
      dispatch({ type: ACTION_TYPES.UPDATE_SINGLE, key, value: filteredArray });
    } else {
      const newArray = (state[key] as number[]).push(value);
      dispatch({ type: ACTION_TYPES.UPDATE_SINGLE, key, value: newArray });
    }
  };

  const isSingleActive = (key: KeyType, value: number) => state[key] === value;

  const isPresentInArray = (key: KeyType, element: number) =>
    (state[key] as number[]).includes(element);

  const handleChangeInput = (key: KeyType, value: number) =>
    dispatch({ type: ACTION_TYPES.UPDATE_SINGLE, key, value });
  return {
    state,
    handleChangeSingleValue,
    handleChangeMultiValue,
    isSingleActive,
    isPresentInArray,
    handleChangeInput,
  };
};
