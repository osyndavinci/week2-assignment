userBirthYear = parseInt(prompt("What is your Birth year?"));
currentYear = parseInt(prompt("What year is this?"));

function ageCalculator(a, b) {
    return b - a;
};

console.log(ageCalculator(userBirthYear, currentYear));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const evenNumbers = [];
for (const num of numbers) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
}

console.log(evenNumbers);