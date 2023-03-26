type ThemeType = "light" | "dark";

type ContextProviderProps = {
  children: React.ReactNode;
};

interface fileInfoProp {
  icon: IconDefinition;
  text: string | null;
  style: string | null;
  iconDivStyle: string | null;
  textStyle: string | null;
}

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

interface LanguageContextType {
  lang: Language;
  setLang: (theme: Language) => void;
}

interface LangOptionsType {
  label: string;
  value: Language;
}

interface SnackbarInfoType {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error";
}

interface SnackbarContextType {
  snackbarInfo: SnackbarInfoType;
  setSnackbarInfo: (snackbarInfo: SnackbarInfoType) => void;
}

interface dropZoneProp {
  setFiles: (files: File[]) => void;
}

interface characCardProp {
  charac: string;
  index: number;
  indexes: number[];
  setIndexes: (indexes: number[]) => void;
}

interface TextState {
  oldText: string | null;
  text: string | null;
  hasDuplicates: boolean;
  status: 200 | 400 | 500 | null;
  error: string | null;
  undoStack: string[] | null;
  redoStack: string[] | null;
}

interface TextAction  {
  type: string;
  text: string | null;
  indexes: number[] | null;
};

type DispatchType = (args: TextAction) => TextAction;