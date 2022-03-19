// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let totalMoves = 0;
  let totalRevenue = 0;

  const moveElementToTheEnd = () => {
    for (let i = 0; i < A.length; i++) {
      if (A[i] < 0) {
        const num = A[i];
        A.splice(i, 1);
        A.push(num);
        totalMoves++;
        break;
      }
    }
  };

  for (let i = 0; i < A.length; i++) {
    totalRevenue += A[i];
    if (totalRevenue < 0) {
      totalRevenue = 0;
      i = -1;

      moveElementToTheEnd();
    }
  }

  return totalMoves;
}

//TODO: E

console.log(solution([10, -10, -1, -1, 10]));
console.log(solution([-1, -1, -1, 1, 1, 1, 1]));
console.log(solution([5, -2, -3, 1]));
console.log(solution(10, -11, 2, 6, 1, 0, 8));
