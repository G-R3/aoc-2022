const input = await Deno.readTextFile("input.txt");

const chars = input.split("");
let left = 0;
let right = 14;
let total = 0;

for (let i = 0; i < chars.length; i++) {
  total = right;
  const subset = chars.slice(left, right);
  const set = new Set(subset);

  if (set.size !== 14) {
    left++;
    right++;
    continue;
  }
  break;
}

console.log(total);
