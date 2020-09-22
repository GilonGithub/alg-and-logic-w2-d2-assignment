// Write an algorithm that performs linear search on a given array.
// Moises, Yuri, and Gil

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 29, 27, 26];

const linearSearch = function(arr, target) {
    let steps = 0;
    testArray = testArray.sort(function(a,b) {return a - b});
    
    //return the index
    //return the number of steps
    for(index = 0; index < testArray.length; index++) {

        steps += 1;
        if(target === testArray[index]) {
            return `${target} found at index ${index} after ${steps} steps.`;
        }
    }


};




console.log(linearSearch(testArray, 19));
// console.log(linearSearch(testArray, 12));
// console.log(linearSearch(testArray, 26));

