const input = await Deno.readTextFile("input.txt");

const topThree = input
  .split("\n\n")
  .map((group) => {
    const total = group
      .split("\n")
      .map((number) => parseInt(number, 10))
      .reduce((a, b) => a + b, 0);

    return total;
  })
  .sort((a, b) => b - a)
  .slice(0, 3);

console.log(topThree[0] + topThree[1] + topThree[2]);
