const input = await Deno.readTextFile("input.txt");

let sum = 0;

const priority = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const chunk = (arr: string[], size: number) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size === 0) {
      // Push a new array containing the current value to the res array
      res.push([arr[i]]);
    } else {
      // Push the current value to the current array
      res[res.length - 1].push(arr[i]);
    }
  }
  return res;
};

const groups = chunk(input.split("\n"), 3);

for (const group of groups) {
  const [a, b, c] = group;

  for (const char of a) {
    if (b.includes(char) && c.includes(char)) {
      sum += priority.indexOf(char) + 1;
      break;
    }
  }
}

console.log(sum);
