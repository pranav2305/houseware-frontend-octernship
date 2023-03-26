import * as actionTypes from './actionTypes';

export const submitText = (text: string) => {
    const action: TextAction = {
        type: actionTypes.SUBMIT_TEXT,
        text: text,
        indexes: null
    };

    return action;
};

export const removeDuplicates = (indexes: number[]) => {
    const action: TextAction = {
        type: actionTypes.REMOVE_DUPLICATES,
        text: null,
        indexes: indexes
    };

    return action;
};

export const reset = () => {
    const action: TextAction = {
        type: actionTypes.RESET,
        text: null,
        indexes: null
    };

    return action;
}

export const undo = () => {
    const action: TextAction = {
        type: actionTypes.UNDO,
        text: null,
        indexes: null
    };

    return action;
}

export const redo = () => {
    const action: TextAction = {
        type: actionTypes.REDO,
        text: null,
        indexes: null
    };

    return action;
}
