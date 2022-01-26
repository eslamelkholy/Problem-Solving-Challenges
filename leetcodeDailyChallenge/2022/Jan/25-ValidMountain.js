var validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  let mountPoint;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] && arr[i + 1] < arr[i]) {
      mountPoint = i;
      break;
    }
  }
  if (!mountPoint) return false;

  for (let i = 0; i < mountPoint; i++) {
    if (arr[i + 1] && arr[i] >= arr[i + 1]) return false;
  }

  for (let i = mountPoint + 1; i < arr.length; i++) {
    if (arr[i + 1] && arr[i] <= arr[i + 1]) return false;
  }

  return true;
};
