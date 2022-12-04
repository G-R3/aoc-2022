const input = await Deno.readTextFile("input.txt");

let sum = 0;

const priority = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

input.split("\n").forEach((line) => {
  const firstHalf = line.slice(0, Math.floor(line.length / 2)).split("");
  const secondHalf = line.slice(Math.floor(line.length / 2));

  for (let i = 0; i < firstHalf.length; i++) {
    if (secondHalf.includes(firstHalf[i])) {
      sum += priority.indexOf(firstHalf[i]) + 1;
      break;
    }
  }
});

console.log(sum);
