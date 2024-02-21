import { useState } from "react";
import { BooleanStatesType } from "../utils/@types/boolean-states-type";

// don't use for loading states or states with initial values
export const useHandleBooleanStates = (initialStates: BooleanStatesType) => {
  const [states, setStates] = useState<BooleanStatesType>(initialStates);

  const handleStates = (key: string, state?: boolean) => {
    setStates((prevState) => ({
      ...prevState,
      [key]: state === undefined ? !prevState[key] : state,
    }));
  };

  return { states, handleStates };
};
