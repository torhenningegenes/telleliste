import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export function AppWrapper({ children }) {
  // Set state as context
  // const [regTelling, setRegTelling] = useState();

  let sharedState = ["Telling"];
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
