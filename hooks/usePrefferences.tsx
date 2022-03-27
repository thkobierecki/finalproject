import { useEffect, useReducer, useState } from "react";
import useSWR from "swr";
import { toast } from "react-toastify";

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
type Action =
  | {
      type: ACTION_TYPES.UPDATE_SINGLE;
      key: KeyType;
      value: number | number[];
    }
  | {
      type: ACTION_TYPES.UPDATE_STATE;
      state: State;
    };
enum ACTION_TYPES {
  UPDATE_SINGLE = "UPDATE_SINGLE",
  UPDATE_STATE = "UPDATE_STATE",
}
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_SINGLE:
      return {
        ...state,
        [action.key]: action.value,
      };
    case ACTION_TYPES.UPDATE_STATE:
      return {
        ...state,
        ...action.state,
      };
    default:
      return state;
  }
};
//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const usePrefferences = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, error } = useSWR("/api/user/profile/preferences", fetcher);
  const handleChangeSingleValue = (key: KeyType, value: number) =>
    dispatch({ type: ACTION_TYPES.UPDATE_SINGLE, key, value });

  const handleChangeMultiValue = (key: KeyType, value: number) => {
    if (isPresentInArray(key, value)) {
      const filteredArray = (state[key] as number[]).filter(
        (item) => item !== value
      );
      dispatch({ type: ACTION_TYPES.UPDATE_SINGLE, key, value: filteredArray });
    } else {
      const newArray = [...(state[key] as number[]), value];
      dispatch({ type: ACTION_TYPES.UPDATE_SINGLE, key, value: newArray });
    }
  };

  const isSingleActive = (key: KeyType, value: number) => state[key] === value;

  const isPresentInArray = (key: KeyType, element: number) =>
    (state[key] as number[]).includes(element);

  const handleChangeInput = (key: KeyType, value: number) =>
    dispatch({ type: ACTION_TYPES.UPDATE_SINGLE, key, value });
  const handleChangeTechSkills = (multiSkills: any) => {
    const skillsID =
      multiSkills.length > 0
        ? multiSkills.map((item: { value: any }) => item.value)
        : [];
    dispatch({
      type: ACTION_TYPES.UPDATE_SINGLE,
      key: "techSkills",
      value: skillsID,
    });
  };
  const handleUpdatePreferences = async () => {
    setIsLoading(true);
    try {
      const req = await fetch("/api/user/profile/preferences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
      toast.success("🦄 Your preferences has been updated");
      setIsLoading(false);
    } catch (e) {
      toast.warning("There was an error trying to update your preferences");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(data);
    if (data && !error) {
      const {
        searchStatus,
        isRemote,
        seniority,
        employmentType,
        location,
        companyStage,
        companyType,
        industryType,
        mainTech,
        techSkills,
        minSalary,
        maxSalary,
      } = data;
      dispatch({
        type: ACTION_TYPES.UPDATE_STATE,
        state: {
          searchStatus,
          isRemote,
          seniority,
          employmentType,
          location,
          companyStage,
          companyType,
          industryType,
          mainTech,
          techSkills,
          minSalary,
          maxSalary,
        },
      });
    }
  }, data);

  return {
    state,
    handleChangeSingleValue,
    handleChangeMultiValue,
    isSingleActive,
    isPresentInArray,
    handleChangeInput,
    handleUpdatePreferences,
    handleChangeTechSkills,
  };
};
