const input = await Deno.readTextFile("./input.txt");

let score = 0;

const scoreMap: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
};

const beatByScore: Record<string, number> = {
  A: 2,
  B: 3,
  C: 1,
};

const loseByScore: Record<string, number> = {
  A: 3,
  B: 1,
  C: 2,
};

input.split("\n").forEach((line) => {
  const [opponent, player] = line.split(" ");

  if (player === "Y") {
    score = score + 3 + scoreMap[opponent];
  } else if (player === "Z") {
    score = score + 6 + beatByScore[opponent];
  } else if (player === "X") {
    score = score + loseByScore[opponent];
  }
});

console.log(score);
