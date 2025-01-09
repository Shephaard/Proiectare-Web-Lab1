let x = +prompt("Type a number X: ");
let y = +prompt("Type a number Y: ");

console.log("X = "+x+", Y = "+y);

console.log("X + Y = " + (x + y).toString());
console.log("X - Y = " + (x - y).toString());
console.log("X * Y = " + (x * y).toString());
console.log("X / Y = " + (x / y).toString());

let a = +prompt("Type the first value: ");
let b = +prompt("Type the last value: ");

sum = 0;
for (let i = a; i <= b; i++) {
    sum += i;
}

console.log(sum);