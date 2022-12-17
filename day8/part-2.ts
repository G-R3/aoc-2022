const input = await Deno.readTextFile("input.txt");

const lines = input.split("\n");

let maxScore = 0;

const getScore = (trees: string[], tree: string, i: number, j: number) => {
  const score: number[] = [];
  let visibleTrees = 0;

  const parsedTree = parseInt(tree, 10);

  // check all the numbers above the current number
  for (let k = i - 1; k >= 0; k--) {
    if (parsedTree <= parseInt(trees[k][j], 10)) {
      visibleTrees++;
      break;
    }
    if (parsedTree > parseInt(trees[k][j], 10)) {
      visibleTrees++;
    }
  }

  score.push(visibleTrees);
  visibleTrees = 0;

  // check all the numbers to the right of the current number
  for (let k = j + 1; k < trees[i].length; k++) {
    if (parsedTree <= parseInt(trees[i][k], 10)) {
      visibleTrees++;
      break;
    }
    if (parsedTree > parseInt(trees[i][k], 10)) {
      visibleTrees++;
    }
  }

  score.push(visibleTrees);
  visibleTrees = 0;

  // check all the numbers below the current number
  for (let k = i + 1; k < trees.length; k++) {
    if (parsedTree <= parseInt(trees[k][j], 10)) {
      visibleTrees++;
      break;
    }
    if (parsedTree > parseInt(trees[k][j], 10)) {
      visibleTrees++;
    }
  }

  score.push(visibleTrees);
  visibleTrees = 0;

  // check all the numbers to the left of the current number
  for (let k = j - 1; k >= 0; k--) {
    if (parsedTree <= parseInt(trees[i][k], 10)) {
      visibleTrees++;
      break;
    }
    if (parsedTree > parseInt(trees[i][k], 10)) {
      visibleTrees++;
    }
  }

  score.push(visibleTrees);

  return score.reduce((a, b) => a * b, 1);
};

for (let i = 1; i < lines.length - 1; i++) {
  for (let j = 1; j < lines[i].length - 1; j++) {
    const score = getScore(lines, lines[i][j], i, j);

    if (score > maxScore) {
      maxScore = score;
    }
  }
}

console.log(maxScore);
