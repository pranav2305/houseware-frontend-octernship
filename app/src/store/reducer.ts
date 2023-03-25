import * as actionTypes from "./actionTypes";
import { containsDuplicates } from "../utils";
import { CASE_SENSITIVE } from "../config";

const initialState: TextState = {
  oldText: null,
  text: null,
  hasDuplicates: false,
  status: null,
  error: null,
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
  }
  return state;
};

export default reducer;
