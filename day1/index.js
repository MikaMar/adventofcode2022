const fs = require("fs/promises");

const countElfCalories = (array) => {
  const mappedCalories = {};
  let index = 1;

  array.forEach((calories) => {
    if (mappedCalories[index] === undefined) {
      mappedCalories[index] = 0;
    }
    if (calories) {
      mappedCalories[index] = mappedCalories[index] + parseInt(calories);
    } else {
      index++;
    }
  });

  return mappedCalories;
};

const getMaxFromMap = (map) => {
  let index = 2;
  let max = 1;

  while (map[index] !== undefined) {
    if (map[index] > map[max]) {
      max = index;
    }
    index++;
  }
  return max;
};

const sortElfe = (array) => {
  let sortable = [];
  for (let elf in array) {
    sortable.push([elf, array[elf]]);
  }

  return sortable.sort(function (a, b) {
    return b[1] - a[1];
  });
};

const getElfWithMostCalories = (array) => {
  const calories = countElfCalories(array);
  const max = sortElfe(calories);
  return max;
};

async function loadFile() {
  try {
    const data = await fs.readFile("day1/data.txt", { encoding: "utf8" });
    return data.split("\n");
  } catch (err) {
    console.log(err);
  }
}
async function main() {
  const arrayElf = await loadFile();
  const result = getElfWithMostCalories(arrayElf);
  console.log(result);
}

main();
module.exports = { countElfCalories, getMaxFromMap, getElfWithMostCalories };
