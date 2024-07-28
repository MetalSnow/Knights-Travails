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
  let parentMap = new Map();

  visited.add(start.toString());

  while (queue.length > 0) {
    let current = queue.shift();
    let currentX = current[0];
    let currentY = current[1];

    if (currentX === end[0] && currentY === end[1]) {
      let path = [];

      let node = current;

      while (node) {
        path.push(node);
        node = parentMap.get(node.toString());
      }

      console.log(
        `You made it in ${path.length - 1} moves!  Here's your path:`
      );

      path.reverse().forEach((pos) => {
        console.log(pos);
      });

      return;
    }

    for (let d of possibleMoves) {
      let nextX = currentX + d[0];
      let nextY = currentY + d[1];
      let nextPos = [nextX, nextY];

      if (isValid(nextPos)) {
        if (!visited.has(nextPos.toString())) {
          visited.add(nextPos.toString());
          parentMap.set(nextPos.toString(), current);
          queue.push(nextPos);
        }
      }
    }
  }
}

knightMoves([0, 0], [3, 3]); // You made it in 2 moves!  Here's your path:([ 0, 0 ],[ 1, 2 ],[ 3, 3 ])
knightMoves([3, 3], [7, 7]); // You made it in 4 moves!  Here's your path:([ 3, 3 ],[ 1, 4 ],[ 3, 5 ],[ 5, 6 ],[ 7, 7 ])
