const input = await Deno.readTextFile("input.txt");

const lines = input.split("\n");

let totalVisibleTrees = lines.length * 2 + (lines[0].length * 2 - 4);

const isVisibleTree = (trees: string[], tree: string, i: number, j: number) => {
  const parsedTree = parseInt(tree, 10);

  let isVisible = true;
  // check all the numbers above the current number
  for (let k = i - 1; k >= 0; k--) {
    if (parsedTree <= parseInt(trees[k][j], 10)) {
      isVisible = false;
      break;
    }
  }

  if (isVisible) return isVisible;

  isVisible = true;
  // check all the numbers to the right of the current number
  for (let k = j + 1; k < trees[i].length; k++) {
    if (parsedTree <= parseInt(trees[i][k], 10)) {
      isVisible = false;
      break;
    }
  }

  if (isVisible) return isVisible;

  isVisible = true;
  // check all the numbers below the current number
  for (let k = i + 1; k < trees.length; k++) {
    if (parsedTree <= parseInt(trees[k][j], 10)) {
      isVisible = false;
      break;
    }
  }

  if (isVisible) return isVisible;

  isVisible = true;
  // check all the numbers to the left of the current number
  for (let k = j - 1; k >= 0; k--) {
    if (parsedTree <= parseInt(trees[i][k], 10)) {
      isVisible = false;
      break;
    }
  }

  if (isVisible) return isVisible;
};

for (let i = 1; i < lines.length - 1; i++) {
  for (let j = 1; j < lines[i].length - 1; j++) {
    isVisibleTree(lines, lines[i][j], i, j) && totalVisibleTrees++;
  }
}

console.log(totalVisibleTrees);
