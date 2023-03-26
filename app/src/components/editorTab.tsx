import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUndo, faRedo } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeDuplicates, undo, redo } from "../store/actionCreators";
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

  const onUndo = () => {
    dispatch(undo());
  };

  const onRedo = () => {
    dispatch(redo());
  };

  return (
    <>
      <div className="flex flex-row text-xl gap-x-3">
        <p
          className={`${
            theme === "light" ? "text-light-primary" : "text-dark-primary"
          }`}
        >
          {indexes.length} Selected
        </p>
        <button
          type="button"
          onClick={onDelete}
          disabled={indexes.length === 0}
        >
          <FontAwesomeIcon
            icon={faTrash}
            className={
              theme === "light"
                ? !!indexes.length
                  ? "text-light-primary transform hover:scale-110"
                  : "text-gray-400"
                : !!indexes.length
                ? "text-dark-primary transform hover:scale-110"
                : "text-dark-text"
            }
          />
        </button>
        <button
          type="button"
          onClick={onUndo}
          disabled={textState.undoStack?.length === 0 ?? true}
        >
          <FontAwesomeIcon
            icon={faUndo}
            className={
              theme === "light"
                ? !!textState.undoStack?.length
                  ? "text-light-primary transform hover:scale-110"
                  : "text-gray-400"
                : !!textState.undoStack?.length
                ? "text-dark-primary transform hover:scale-110"
                : "text-dark-text"
            }
          />
        </button>
        <button
          type="button"
          onClick={onRedo}
          disabled={textState.redoStack?.length === 0 ?? true}
        >
          <FontAwesomeIcon
            icon={faRedo}
            className={
              theme === "light"
                ? !!textState.redoStack?.length
                  ? "text-light-primary transform hover:scale-110"
                  : "text-gray-400"
                : !!textState.redoStack?.length
                ? "text-dark-primary transform hover:scale-110"
                : "text-dark-text"
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
