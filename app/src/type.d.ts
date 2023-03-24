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

interface dropZoneProp {
  setFiles: (files: File[]) => void;
}

interface TextState {
  text: string | null;
  hasDuplicates: boolean;
  status: 200 | 400 | 500 | null;
  error: string | null;
}

interface TextAction  {
  type: string;
  text: string | null;
  charac: string | null;
  index: number | null;
};

type DispatchType = (args: TextAction) => TextAction;