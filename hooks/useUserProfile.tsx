import { useEffect, useReducer, useState } from "react";
import useSWR from "swr";
import { toast } from "react-toastify";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  city: "",
  introduction: "",
  linkedin: "",
  github: "",
  cvLink: "",
};
const errorInitState = {
  firstName: false,
  lastName: false,
  city: false,
  introduction: false,
  linkedin: false,
  github: false,
};
type State = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  introduction: string;
  linkedin: string;
  github: string;
  cvLink: string;
};
export type KeyType = keyof State;
type Action =
  | {
      type: ACTION_TYPES.UPDATE_SINGLE;
      key: KeyType;
      value: string;
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

export const useUserProfile = () => {
  const { data, error } = useSWR(`/api/user/profile`, fetcher);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(errorInitState);
  const handleChangeSingleValue = (key: KeyType, value: string) =>
    dispatch({ type: ACTION_TYPES.UPDATE_SINGLE, key, value });
  const hasError = (key: KeyType) => {
    if (!state[key] || state[key].length < 1 || state[key] === "") {
      return true;
    } else {
      return false;
    }
  };
  const setErrorMessage = (key: KeyType) =>
    setErrors({ ...errors, [key]: true });
  const validateForm = () => {
    const stateKeys = Object.keys(errorInitState) as KeyType[];
    stateKeys.forEach((element) => {
      if (hasError(element)) {
        setErrorMessage(element);
      }
    });
  };
  const hasNoErrors = () => {
    const values = Object.values(errors);
    const hasNoErrors = values.every((item) => item === false);
    return hasNoErrors;
  };

  const handleUpdateProfile = async () => {
    setIsLoading(true);
    try {
      await validateForm();

      if (hasNoErrors()) {
        const req = await fetch("/api/user/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state),
        });
        toast.success("🦄 Your profile has been updated");
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (e) {
      toast.warning("There was an error trying to update your profile");
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (data) {
      const {
        firstName,
        lastName,
        email,
        city,
        introduction,
        linkedin,
        github,
        cvLink,
      } = data;
      dispatch({
        type: ACTION_TYPES.UPDATE_STATE,
        state: {
          firstName,
          lastName,
          email,
          city,
          introduction,
          linkedin,
          github,
          cvLink,
        },
      });
    }
  }, data);
  return {
    state,
    errors,
    isLoading,
    handleUpdateProfile,
    handleChangeSingleValue,
  };
};
