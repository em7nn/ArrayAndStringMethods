//task 1 start
const arr = [1, 25, 244, 44, 55, 22, 64];
const average = arr.reduce((a, b) => a + b) / arr.length;
console.log(average);
//task 1 end

//task 2 start
//method 1
const number = [1, 5, 2, 7];
number.push(11);
console.log(number);

//method 2
let numb = [1, 5, 2, 7];
numb.splice(4, 0, 11);
console.log(numb);

//method 3
let numara1 = [1, 5, 2, 7];
let numara2 = [11];

let concat = numara1.concat(numara2);
console.log(concat);
//task 2 end

//task 3 start
let str = "Salam Necesen";
let say = 0;
function count() {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "N") {
            say++
        }
        if (str[i] == "n") {
            say++
        }
    }
    return say
}
console.log("result = " + count(str) + " eded n herfi var");
//task 3 end

//task 4 start
let centence = "My Name Is Emin";
let word = Array.from(centence);
let lower = 0;
let upper = 0;
for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i]) {
        upper++
    }
    else if (word[i].toLowerCase() == word[i]) {
        lower++
    }
}

if (upper > 1 && lower > 1) {
    console.log("her iki case sahibdir")
}
else {
    console.log("her iki case sahib deyil")
}
//task 4 end