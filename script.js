const knightMoves = function (positionStart, positionFinal) {
	const moves = [
		[1, 2],
		[1, -2],
		[-1, 2],
		[-1, -2],
		[2, 1],
		[2, -1],
		[-2, 1],
		[-2, -1],
	];
	const queue = [];
	queue.push([positionStart, [positionStart], 0]);

	const visited = new Set();
	visited.add(`${positionStart[0]},${positionStart[1]}`);

	while (queue.length > 0) {
		if (
			queue[0][0][0] !== positionFinal[0] ||
			queue[0][0][1] !== positionFinal[1]
		) {
			for (let move of moves) {
				const newPos = `${move[0] + queue[0][0][0]},${
					move[1] + queue[0][0][1]
				}`;
				if (!visited.has(newPos)) {
					if (
						move[0] + queue[0][0][0] > 0 &&
						move[0] + queue[0][0][0] < 9 &&
						move[1] + queue[0][0][1] > 0 &&
						move[1] + queue[0][0][1] < 9
					) {
						queue.push([
							[move[0] + queue[0][0][0], move[1] + queue[0][0][1]],
							queue[0][1].concat([
								[move[0] + queue[0][0][0], move[1] + queue[0][0][1]],
							]),
							queue[0][2] + 1,
						]);
						visited.add(newPos);
					}
				}
			}
			queue.shift();
		} else {
			return `Shortest number of steps is ${
				queue[0][2]
			}. The shortest path is ${JSON.stringify(queue[0][1])}`;
		}
	}
};

console.log(knightMoves([1, 1], [1, 2]));
