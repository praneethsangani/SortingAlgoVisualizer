export async function mergeSort(arr, mainArr) {
    if (arr.length <= 1) {
        return arr;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(arr.length / 2);

    // This is where we will be dividing the array into left and right
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Using recursion to combine the left and right
    await merge(mergeSort(left, mainArr), mergeSort(right, mainArr), mainArr);
}

async function merge(left, right, mainArr) {
    const bars = document.getElementsByClassName('array-bar');
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    resultArray = resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

    // await new Promise(r => setTimeout(r, 10));
    // console.log(arr);
    for (let i = 0; i < resultArray.length; i++) {
        let barIndex = findIndexOfItem(mainArr, resultArray[i]);
        bars[barIndex].style.backgroundColor = 'red';
        bars[i].style.backgroundColor = 'red';
        await new Promise(r => setTimeout(r, 8));
        let temp_height = mainArr[barIndex];
        mainArr[barIndex] = mainArr[i];
        mainArr[i] = temp_height;
        temp_height = bars[barIndex].style.height;
        bars[barIndex].style.height = bars[i].style.height;
        bars[i].style.height = temp_height;
        await new Promise(r => setTimeout(r, 8));
        bars[i].style.backgroundColor = 'turquoise';
        bars[barIndex].style.backgroundColor = 'turquoise';
    }
    return resultArray;
}

function findIndexOfItem(array, val) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === val) return i;
    }
    return -1;
}

// function animateBars(startIndex, endIndex, color) {
//     const bars = document.getElementsByClassName('array-bar');
//     for (let i = startIndex; i < endIndex; i++) {
//         bars[i].style.backgroundColor = color;
//     }
// }
//
// function swap(array, leftIndex, rightIndex) {
//     const bars = document.getElementsByClassName('array-bar');
//     let temp_height = array[rightIndex];
//     array[rightIndex] = array[leftIndex];
//     array[leftIndex] = temp_height;
//     temp_height = bars[rightIndex].style.height;
//     bars[rightIndex].style.height = bars[leftIndex].style.height;
//     bars[leftIndex].style.height = temp_height;
// }