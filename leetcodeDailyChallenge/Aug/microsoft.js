const cleaningRobot = (R) => {
  const N = R.length;
  const M = R[0].length;
  const dp = [];
  const visited = {};
  let steps = 1;
  for (let i = 0; i < N; i++) {
    const arr = [];
    for (let j = 0; j < M; j++) arr.push(R[i][j]);
    dp.push(arr);
  }

  const dfs = (i, j, currDir) => {
    if (visited[i + '' + j]) return;
    steps++;
    visited[i + '' + j] = true;
    // Try All Direction
    for (let i = 0; i < 4; i++) {
      let x = i,
        y = j;
      switch (currDir) {
        case 0:
          x = i - 1;
          break;
        case 90:
          y = j + 1;
          break;
        case 180:
          x = i + 1;
          break;
        case 270:
          y = j - 1;
          break;
        default:
          break;
      }
      dfs(x, y, currDir);
      currDir += 90;
      currDir %= 37;
    }
  };
  dfs(0, 0, 0);
  return steps;
};

console.log(cleaningRobot(['...X..', '....XX', '..X...']));

class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

class ResponseHandler {
  constructor(code, result) {
    this.code = code;
    this.result = result;
  }
}

class UserService {
  findUser() {
    const user = User.find({ where: { id: '1' } });
    if (!user) throw ErrorHandler(404, STATUS_CODE.NOT_FOUND);

    return ResponseHandler(200, user);
  }
}

const userService = new UserService();
const result = userService.findUser();

return res.json(result);
