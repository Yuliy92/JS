//Задание 6.6.1
function palindrome(x) {
  var k = 0;
  if (x === x.split("").reverse().join("")) {
    return true;
  }
  for (var i = 0; i < x.length; i++) {
    if (x[i] == x[i + 1]) {
      k++;
    }
  }

  return k >= x.length / 2 ? true : false;
}
console.log(palindrome("aabb"));

//Задание 6.6.2
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

const arr = [
  1,
  2,
  3,
  1,
  5,
  4,
  2,
  3,
  5,
  "they",
  "don't",
  "know",
  "that",
  "we",
  "know",
  "that",
  "they",
  "know",
];
console.log(unique(arr));

//Задание 6.6.3
const a = prompt("Введите число");
const newArray = [];
for (let i = 1; i <= a; i += 1) {
  newArray.push(i);
  let num = parseInt(a);
}
console.log(newArray);

//Задание 6.6.4

const ticTacToe = [
  ["x", "o", "x"],
  ["o", "x", "o"],
  ["x", "o", "x"],
];

for (let i = 0; i < ticTacToe.length; i++) {
  console.log(ticTacToe[i].join(" "));
}

//Задание 6.6.5

const obj = {
  some: "some",
  dom: "text",
  arr: [1, 2, 3, 4, 5],
  tom: "there",
};
let str = obj.arr.join("");

const arrValues = Object.values(obj);
console.log(arrValues);
