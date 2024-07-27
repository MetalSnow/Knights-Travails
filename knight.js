// Check if position within the 8x8 board
function isValid(position) {
  return (
    0 <= position[0] && 8 > position[0] && 0 <= position[1] && 8 > position[1]
  );
}

function knightMoves(start, end) {
  const possibleMoves = [
    [-2, -1],
    [-1, -2],
    [-2, 1],
    [-1, 2],
    [1, -2],
    [2, -1],
    [1, 2],
    [2, 1],
  ];
  let queue = [start];
  let visited = new Set();
  let steps = 0;

  while (queue.length > 0) {
    let next = [];
    while (queue.length > 0) {
      let current = queue.shift();
      let currentX = current[0];
      let currentY = current[1];

      if (currentX === end[0] && currentY === current[1]) {
        return steps;
      }

      for (let d of possibleMoves) {
        let nextX = currentX + d[0];
        let nextY = currentY + d[1];

        if (isValid([nextX, nextY])) {
          if (!visited.has(`${nextX},${nextY}`)) {
            visited.add(`${nextX},${nextY}`);
            next.push([nextX, nextY]);
          }
        }
      }
    }
    steps += 1;
    queue = next;
  }
}

console.log(knightMoves([0, 0], [3, 3]));
