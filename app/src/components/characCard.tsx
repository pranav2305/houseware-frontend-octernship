import { Radio, Divider } from "@mui/material";
import { ThemeContext } from "../contexts/ThemeContext";
import { SnackbarContext } from "../contexts/SnackbarContext";
import { ChangeEvent, useContext } from "react";
import { useSelector } from "react-redux";
import { CASE_SENSITIVE } from "../config";

const CharacCard = ({ charac, index, indexes, setIndexes }: characCardProp) => {
  const { theme } = useContext(ThemeContext);
  const { setSnackbarInfo } = useContext(SnackbarContext);
  const textState = useSelector((state: TextState) => state);

  const toggle = (index: number) => {
    const currText = textState.text ?? "";
    if (indexes.includes(index)) {
      setIndexes(indexes.filter((i) => i !== index));
    } else {
      const prevIndex = CASE_SENSITIVE
        ? indexes.find((i) => currText[i] === currText[index])
        : indexes.find(
            (i) => currText[i].toLowerCase() === currText[index].toLowerCase()
          );
      if (prevIndex !== undefined) {
        setSnackbarInfo({
          open: true,
          message: `'${currText[index]}' is already selected at index ${prevIndex}`,
          severity: "error",
        });
        return;
      }
      setIndexes([...indexes, index]);
    }
  };

  const hasDuplicates = (charac: string) => {
    const currText = textState.text ?? "";
    return currText.split("").filter((c) => c === charac).length > 1;
  };

  return (
    <div
      key={index}
      className={`${
        theme === "light" ? "border-light-primary" : "border-dark-primary"
      } flex flex-col items-center w-16 h-24 rounded-xl border-2`}
    >
      <Radio
        checked={indexes.includes(index)}
        onClick={() => toggle(index)}
        disabled={!hasDuplicates(charac)}
        value={index}
        sx={{
          color: theme === "light" ? "#136FB4" : "#4ECBFB",
        }}
      />
      <hr
        className={`${
          theme === "light" ? "border-light-primary" : "border-dark-primary"
        } w-9/12 border-[1.5px] mb-1`}
      />
      <p className="text-2xl">{charac}</p>
    </div>
  );
};

export default CharacCard;
