import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeDuplicates } from "../store/actionCreators";
import { DUPLICATE_WHITESPACES_ALLOWED } from "../config";
import CharacCard from "./characCard";

const EditorTab = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const textState = useSelector((state: TextState) => state);

  const [indexes, setIndexes] = useState<number[]>([]);

  const onDelete = () => {
    dispatch(removeDuplicates(indexes));
    setIndexes([]);
  };

  return (
    <>
      <div className="flex flex-row text-xl gap-x-3">
        <p>{indexes.length} Selected</p>
        <button type="button" onClick={onDelete}>
          <FontAwesomeIcon
            icon={faTrash}
            className={
              theme === "light"
                ? "text-light-primary hover:text-light-secondary"
                : "text-dark-primary hover:text-dark-secondary"
            }
          />
        </button>
      </div>
      <div className="flex flex-row gap-x-6 gap-y-6 flex-wrap mt-8">
        {textState.text?.split("").map((charac, index) => {
          if (DUPLICATE_WHITESPACES_ALLOWED && charac === " ") return;
          return (
            <CharacCard
              charac={charac}
              index={index}
              indexes={indexes}
              setIndexes={setIndexes}
            />
          );
        })}
      </div>
    </>
  );
};

export default EditorTab;
