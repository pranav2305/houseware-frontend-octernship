import * as actionTypes from "./actionTypes";
import { containsDuplicates } from "../utils";

const initialState: TextState = {
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
            text: action.text,
            hasDuplicates: containsDuplicates(action.text),
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
      } catch (error) {
        let err = error as Error;
        return {
          ...state,
          status: 500,
          error: err.message,
        };
      }
    case actionTypes.REMOVE_DUPLICATES:
      try {
        if (action.charac && action.index) {
          let text = state.text;
          if (text) {
            let newText = text
              .split("")
              .filter((char, i) => char !== action.charac || i === action.index)
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
  }
  return state;
};

export default reducer;
