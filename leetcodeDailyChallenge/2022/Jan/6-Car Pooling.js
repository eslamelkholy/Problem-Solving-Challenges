/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  let tripPassengersArr = Array(1001).fill(0);

  for (const [passengers, from, to] of trips) {
    tripPassengersArr[from] += passengers;
    tripPassengersArr[to] -= passengers;
  }

  for (const passenger of tripPassengersArr) {
    capacity -= passenger;
    if (capacity < 0) {
      return false;
    }
  }
  return true;
};

console.log(
  carPooling(
    [
      [4, 5, 6],
      [6, 4, 7],
      [4, 3, 5],
      [2, 3, 5],
    ],
    13
  )
);

// console.log(
//   carPooling(
//     [
//       [2, 1, 5],
//       [3, 5, 7],
//     ],
//     4
//   )
// );

// console.log(
//   carPooling(
//     [
//       [2, 1, 5],
//       [3, 3, 7],
//     ],
//     4
//   )
// );

// console.log(
//   carPooling(
//     [
//       [3, 2, 7],
//       [3, 7, 9],
//       [8, 3, 9],
//     ],
//     11
//   )
// );

// console.log(carPooling([[2, 1, 5]], 4));
/**
 * Trips[i] = [numPassengersi, fromi, toi]
 * Pickup: From
 * Dropoff : to
 */
