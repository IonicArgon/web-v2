import { createContext, useContext } from "react";

const AppContext = createContext();

const ContextWrapper = ({ children }) => {
  let sharedState = {
    greeting: "Hello World",
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}

export default ContextWrapper;
