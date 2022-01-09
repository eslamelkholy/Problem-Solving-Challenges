/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  const dir = {
    E: [1, 0],
    W: [-1, 0],
    N: [0, 1],
    S: [0, -1],
  };

  const face = {
    E: {
      G: 'E',
      L: 'N',
      R: 'S',
    },
    W: {
      G: 'W',
      L: 'S',
      R: 'N',
    },
    N: {
      G: 'N',
      L: 'W',
      R: 'E',
    },
    S: {
      G: 'S',
      L: 'E',
      R: 'W',
    },
  };

  let faced = 'N';
  let pos = {
    x: 0,
    y: 0,
  };

  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] === 'G') {
      pos.x += dir[faced][0];
      pos.y += dir[faced][1];
    }
    faced = face[faced][instructions[i]];
  }

  if ((pos.x === 0 && pos.y === 0) || faced !== 'N') {
    return true;
  }

  return false;
};

// console.log(isRobotBounded('GGLLGG'));
// console.log(isRobotBounded('GG'));
// console.log(isRobotBounded('GLRLLGLL'));
console.log(isRobotBounded('GLGLGGLGL'));
