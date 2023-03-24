import * as actionTypes from './actionTypes';

export const submitText = (text: string) => {
    const action: TextAction = {
        type: actionTypes.SUBMIT_TEXT,
        text: text,
        charac: null,
        index: null
    };

    return action;
};

export const removeDuplicates = (charac: string, index: number) => {
    const action: TextAction = {
        type: actionTypes.REMOVE_DUPLICATES,
        text: null,
        charac: charac,
        index: index
    };

    return action;
};
