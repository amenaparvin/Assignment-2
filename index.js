//.................1

function calculateDifference(a, b){
    return (a-b)
}

    // console.log(calculateDifference(10, 5))

    //..............2

    function isOdd(number) {
        if(number % 2!== 0){
            return true;
        }else{
            return  false
        }
    }
    // console.log(isOdd(11))

    //............3
function findMin(numbers) {
    return Math.min(...numbers);
}
const numberSet = [9, 5, 11, 3, 13, 7];
console.log(findMin(numberSet));

//.............4

function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

const numberSet2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numberSet2);
console.log(evenNumbers);  

//..............5

function sortArrayDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
}

const numberSet3 = [9, 5, 11, 3, 13, 7];
const sortedNumbers = sortArrayDescending(numberSet3);
console.log(sortedNumbers); 


//.................6
function lowercaseFirstLetter(str) {
    if (str.length === 0) {
        return str; 
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}

const result2 = lowercaseFirstLetter("Hello World");
console.log(result2);  

//.................7

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

const result = countVowels("Happy New Year");
console.log(result);  


//.................8

function findAverage(numbers) {
    if (numbers.length === 0) {
        return 0;  // Handle the case of an empty array
    }
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

const numbers = [4, 8, 6, 10, 12];
const average = findAverage(numbers);
console.log(average);  






