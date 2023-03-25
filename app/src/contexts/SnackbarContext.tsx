import { useState, createContext } from "react";

const initialContext: SnackbarContextType = {
  snackbarInfo: {
    message: "",
    severity: "info",
    open: false,
  },
  setSnackbarInfo: () => {},
};

export const SnackbarContext = createContext<SnackbarContextType>(initialContext);

export default ({ children }: ContextProviderProps) => {
  const [snackbarInfo, setSnackbarInfo] = useState<SnackbarInfoType>({
    message: "",
    severity: "info",
    open: false,
  });

  const defaultContext = {
    snackbarInfo,
    setSnackbarInfo,
  };
  return (
    <SnackbarContext.Provider value={defaultContext}>
      {children}
    </SnackbarContext.Provider>
  );
};
