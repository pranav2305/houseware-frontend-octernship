import {CASE_SENSITIVE, DUPLICATE_WHITESPACES_ALLOWED} from "./config";

export const containsDuplicates  = (str: string) => {
  let set = new Set();

  if (!CASE_SENSITIVE) {
    str = str.toLowerCase();
  }

  for (let i = 0; i < str.length; i++) {
    if (
      !DUPLICATE_WHITESPACES_ALLOWED ||
      (DUPLICATE_WHITESPACES_ALLOWED && str[i] != " ")
    ) {
      if (set.has(str[i])) {
        return true;
      }

      set.add(str[i]);
    }
  }

  return false;
};
