const input = await Deno.readTextFile("input.txt");

let highest = 0;

input.split("\n\n").map((group) => {
  const total = group
    .split("\n")
    .map((number) => parseInt(number, 10))
    .reduce((a, b) => a + b, 0);

  if (total >= highest) {
    highest = total;
  }
});

console.log(highest);
