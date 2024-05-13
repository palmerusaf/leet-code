/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid.length || !grid[0].length) return 0;

  const rows = grid.length
  const cols = grid[0].length
  const visit = new Set();
  let islands = 0

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] == "1" && !visit.has(`${row}, ${col}`)) {
        bfs(row, col)
        islands++
      }
    }
  }
  return islands
  function bfs(pRow, pCol) {
    const q = []
    visit.add(`${pRow}, ${pCol}`)
    q.push([pRow, pCol])
    while (q.length) {
      const [row, col] = q.pop()
      const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
      for (const [dirRow, dirCol] of dir) {
        const adjRow = row + dirRow
        const adjCol = col + dirCol
        if (
          adjRow > -1 &&
          adjCol > -1 &&
          adjRow < rows &&
          adjCol < cols &&
          grid[adjRow][adjCol] === "1" &&
          !visit.has(`${adjRow}, ${adjCol}`)
        ) {
          q.push([adjRow, adjCol])
          visit.add(`${adjRow}, ${adjCol}`)
        }
      }
    }
  }
};

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]

const result = numIslands(grid)
console.log({ result })
