// #1
const num = [1, 4, 8];
console.log(num);
num[1] = 10;
console.log(num);

//#2
const space = ["kizaru", "markenly","alblak52"];
console.log(space);
space[3] = "bigbabytape";
console.log(space);


// #3

const numbs = [1, 52 , 14 , 88];
console.log(numbs[0] + numbs[1] + numbs[2] + numbs[3])

// #4

const number = [1, 2, 3, 4, 5];
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
  }
console.log(number);


// 5#
const blank = ["кіт", "пес", "зебра", "машина", "слон"];
for (let i = 0; i <blank.length; i += 1) {
    if (blank[i].length > 5) {
        console.log(blank[i]);
    }
}

// #6

const blankNumber = [7 , 8 , 52 , 81 , 21 , 4 , 88 , 193 , 9 , 52 ];
let maxNumber = blankNumber[0];
for (let i = 1; i < blankNumber.length; i += 1) {
    if (blankNumber[i] > maxNumber) {
        maxNumber = blankNumber[i];
    }
}
console.log(maxNumber);
