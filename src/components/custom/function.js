
import React from 'react';

// import IsFetching from "../../utils/IsFetching";
// import IsFetching from '../../../utils/IsFetching';
export const stringIsEmpty = (string) => {
  if (objectIsNull(string) || string === '') {
    return true;
  } else {
    return false;
  }
};
export const objectIsNull = (object) => {
  if (object === null || object === undefined || object === '(null)') {
    return true;
  } else {
    return false;
  }
};
export const arrayIsEmpty = (array) => {
  if (objectIsNull(array) || array.length === 0) {
    return true;
  } else {
    return false;
  }
};
export const isExitInObject = (string, object) => {
  if (!objectIsNull(object)) {
    for (var obj of object) {
      if (obj.ma === string) {
        return true
      }
    }
  }

  return false
};
