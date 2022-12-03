const input = await Deno.readTextFile("./input.txt");

let score = 0;

const letterMap: Record<string, string> = {
  X: "A",
  Y: "B",
  Z: "C",
};

const scoreMap: Record<string, number> = {
  X: 1,
  Y: 2,
  Z: 3,
};

input.split("\n").forEach((line) => {
  const [opponent, player] = line.split(" ");

  if (opponent === letterMap[player]) {
    score = score + 3 + scoreMap[player];
  } else if (opponent === "A" && player === "Y") {
    score = score + 6 + 2;
  } else if (opponent === "B" && player === "Z") {
    score = score + 6 + 3;
  } else if (opponent === "C" && player === "X") {
    score = score + 6 + 1;
  } else {
    score = score + scoreMap[player];
  }
});

console.log(score);
