/**
 * @description swap arr[idx1] and arr[idx2]
 */
exports.swapArrayElement = (arr, idx1, idx2) => {
  // const tmp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = tmp;
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
