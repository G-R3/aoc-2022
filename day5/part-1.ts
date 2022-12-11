const input = await Deno.readTextFile("input.txt");

const stacks: string[][] = [];

const [firstHalf, secondHalf] = input.split("\n\n");

const numOfStacks = Number(firstHalf.split("\n").reverse()[0].slice(-2));
const crates = firstHalf.split("\n").reverse().slice(1);

const instructions = secondHalf.split("\n").map((instruciton) => {
  const steps = instruciton.split(" ").map((step) => Number(step));

  return [steps[1], steps[3], steps[5]];
});

for (let i = 0; i < numOfStacks; i++) {
  stacks[i] = [];
}

crates.forEach((crate) => {
  let position = 0;

  for (let i = 0; i < numOfStacks; i++) {
    position = i == 0 ? position + 1 : position + 3;

    if (crate.charAt(position) != " ") stacks[i].push(crate.charAt(position));
    position++;
  }
});

instructions.forEach((instruction) => {
  const [amount, from, to] = instruction;

  for (let i = 0; i < amount; i++) {
    stacks[to - 1].push(stacks[from - 1].pop()!);
  }
});

const result = stacks.map((stack) => stack[stack.length - 1]).join("");

console.log(result);
