// Write an algorithm that performs binary search on a given array.
// the function will also track, and print out the number of steps required to reach the target
// the index of the item 
// Moises, Yuri, and Gil

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 29, 27, 26]

const binarySearch = function(arr, target) {

    testArray = testArray.sort(function(a,b) {return a - b});
    let first = 0;
    let last = testArray.length - 1;
    let middle = Math.trunc((first + last)/2);
    let steps = 0;

    console.log(first, middle, last); //0, 8, 16

    while (first <= last) {

        steps += 1;

        if(target === arr[middle]){
            return `${target} found at index ${middle} after ${steps} steps.`;
        } else if(target > arr[middle]) {
            first = middle + 1; 
        } else if(target < arr[middle]) {
            last = middle - 1;
        }

        middle = Math.trunc((first + last)/2);

        // console.log(first, middle, last); //9, 12, 16 --- 13, 14, 16 --- 13, 13, 13 --- 
       
    }
    

    //first index should be 0
    //last index should be the length of the array minus 1
    //middle index is (first index + last index)/2; remove the fractional part/decimal part

    //***loop steps until target is equal the middle element and while 
    //COMPARE the element of the array in the middle with the target
        //A. if target is greater than the middle element, then first index = middle index + 1
        //B. if target is less than the middle element, then the last index = middle index - 1
    //middle index is (first index + last index)/2
    //***end loop
    

};




console.log(binarySearch(testArray, 24));
console.log(binarySearch(testArray, 12));
console.log(binarySearch(testArray, 26));