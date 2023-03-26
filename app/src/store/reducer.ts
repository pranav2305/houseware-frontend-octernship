import * as actionTypes from "./actionTypes";
import { containsDuplicates } from "../utils";
import { CASE_SENSITIVE } from "../config";

const initialState: TextState = {
  oldText: null,
  text: null,
  hasDuplicates: false,
  status: null,
  error: null,
  undoStack: null,
  redoStack: null,
};

const reducer = (
  state: TextState = initialState,
  action: TextAction
): TextState => {
  switch (action.type) {
    case actionTypes.SUBMIT_TEXT:
      try {
        if (action.text && action.text.length > 0) {
          return {
            ...state,
            oldText: action.text,
            text: action.text,
            hasDuplicates: containsDuplicates(action.text),
            status: 200,
            error: null,
            undoStack: null,
            redoStack: null,
          };
        } else {
          return {
            ...state,
            oldText: null,
            text: null,
            hasDuplicates: false,
            status: 400,
            error: "No text was submitted",
          };
        }
      } catch (error) {
        let err = error as Error;
        return {
          ...state,
          oldText: null,
          text: null,
          hasDuplicates: false,
          status: 500,
          error: err.message,
        };
      }
    case actionTypes.REMOVE_DUPLICATES:
      try {
        if (action.indexes && action.indexes.length > 0) {
          const text = state.text ?? "";
          const characsToRemove = action.indexes.map((index) =>
            CASE_SENSITIVE ? text[index] : text[index].toLowerCase()
          );
          if (text) {
            let newText = text
              .split("")
              .filter(
                (char, i) =>
                  action.indexes?.includes(i) ||
                  (CASE_SENSITIVE
                    ? !characsToRemove.includes(char)
                    : !characsToRemove.includes(char.toLowerCase()))
              )
              .join("");
            return {
              ...state,
              text: newText,
              hasDuplicates: containsDuplicates(newText),
              status: 200,
              error: null,
              undoStack: [...(state.undoStack ?? []), text],
              redoStack: null,
            };
          } else {
            return {
              ...state,
              status: 400,
              error: "No text was submitted",
            };
          }
        } else {
          return {
            ...state,
            status: 400,
            error: "No character was submitted",
          };
        }
      } catch (error) {
        let err = error as Error;
        return {
          ...state,
          status: 500,
          error: err.message,
        };
      }
    case actionTypes.RESET:
      return initialState;
    case actionTypes.UNDO:
      try {
        if (state.undoStack && state.undoStack.length > 0) {
          const lastText = state.undoStack[state.undoStack.length - 1];
          return {
            ...state,
            text: lastText,
            hasDuplicates: containsDuplicates(lastText),
            status: lastText ? 200 : 400,
            error: null,
            undoStack: state.undoStack.slice(0, -1),
            redoStack: [...(state.redoStack ?? []), state.text ?? ""],
          };
        } else {
          return {
            ...state,
            status: 400,
            error: "No text to undo",
          };
        }
      } catch (error) {
        let err = error as Error;
        return {
          ...state,
          status: 500,
          error: err.message,
        };
      }
    case actionTypes.REDO:
      try {
        if (state.redoStack && state.redoStack.length > 0) {
          const lastText = state.redoStack[state.redoStack.length - 1];
          return {
            ...state,
            text: lastText,
            hasDuplicates: containsDuplicates(lastText),
            status: lastText ? 200 : 400,
            error: null,
            undoStack: [...(state.undoStack ?? []), state.text ?? ""],
            redoStack: state.redoStack.slice(0, -1),
          };
        } else {
          return {
            ...state,
            status: 400,
            error: "No text to redo",
          };
        }
      } catch (error) {
        let err = error as Error;
        return {
          ...state,
          status: 500,
          error: err.message,
        };
      }
  }
  return state;
};

export default reducer;
