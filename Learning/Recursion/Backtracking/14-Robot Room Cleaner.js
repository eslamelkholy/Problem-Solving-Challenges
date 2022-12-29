/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

const Directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function (robot) {
  const visited = new Set();
  backtrack(0, 0, 0, robot, visited);
};

const backtrack = (row, col, dir, robot, visited) => {
  const position = `${row},${col}`;
  visited.add(position);

  robot.clean();

  // going clockwise : 0: 'up', 1: 'right', 2: 'down', 3: 'left'
  for (let i = 0; i < 4; i++) {
    const newDir = (i + dir) % 4;
    const newRow = row + Directions[newDir][0];
    const newCol = col + Directions[newDir][1];
    const newPos = `${newRow},${newCol}`;

    if (!visited.has(newPos) && robot.move()) {
      backtrack(newRow, newCol, newDir, robot, visited);
      goBack(robot); // Go Back
    }

    robot.turnRight();
  }
};

const goBack = (robot) => {
  robot.turnRight();
  robot.turnRight();
  robot.move();
  robot.turnRight();
  robot.turnRight();
};
