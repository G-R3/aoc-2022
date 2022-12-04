const input = await Deno.readTextFile("input.txt");

let total = 0;

const fillArray = (min: number, max: number) => {
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
};

input.split("\n").forEach((line) => {
  const [pairLeft, pairRight] = line.split(",");

  const leftRange = pairLeft.split("-").map((n) => parseInt(n, 10));
  const rightRange = pairRight.split("-").map((n) => parseInt(n, 10));

  const left = fillArray(leftRange[0], leftRange[1]);
  const right = fillArray(rightRange[0], rightRange[1]);

  if (left.every((n) => right.includes(n))) {
    total++;
  } else if (right.every((n) => left.includes(n))) {
    total++;
  }
});

console.log(total);
