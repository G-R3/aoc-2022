const input = await Deno.readTextFile("input.txt");

const lines = input.split("\n");

type Directory = {
  name: string;
  parent?: Directory;
  files: { [key: string]: string };
  directories: { [key: string]: Directory };
};

const rootDirector: Directory = {
  name: "/",
  files: {},
  directories: {},
};

let current: Directory = rootDirector;

for (const line of lines) {
  const command = line.split(" ");
  if (command[0] === "$") {
    if (command[1] === "cd") {
      if (command[2] === "/") {
        // Go to root directory
        current = rootDirector;
      } else if (command[2] === "..") {
        // Go back to parent directory
        if (current.parent) {
          current = current.parent;
        }
      } else {
        // Go to child directory
        const dir = command[2];
        if (!current.directories[dir]) {
          current.directories[dir] = {
            name: dir,
            parent: current,
            files: {},
            directories: {},
          };
        }
        current = current.directories[dir];
      }
    }
  } else {
    if (command[0] === "dir") continue;

    current.files[command[1]] = command[0];
  }
}

/*
 / 
    /a
        /e
            - 584 i
        - 29116 f
        - 2557 g
        - 62596 h.lst
    - 14848514 b.txt
    - 8504156 c.dat
    /d
        - 4060174 j
        - 8033020 d.log
        - 5626152 d.ext
        - 7214296 k

*/

const fileSizes: number[] = [];

// calculate file size
function calculateSizes(dir: Directory): number {
  let size = 0;

  for (const file in dir.files) {
    size += parseInt(dir.files[file]);
  }

  for (const directory in dir.directories) {
    const directorySize = calculateSizes(dir.directories[directory]);

    size += directorySize;
  }
  fileSizes.push(size);

  return size;
}

calculateSizes(rootDirector);

const availableSpace = 70000000;
const updateSize = 30000000;
const sizeOfUnuseSpace = availableSpace - Math.max(...fileSizes);

const requiredSpace = updateSize - sizeOfUnuseSpace;

const directoryToDelete = fileSizes.filter((size) => size >= requiredSpace);

console.log(Math.min(...directoryToDelete));
