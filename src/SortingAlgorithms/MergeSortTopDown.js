export async function mergeSortTopDown(mainArray, startIndex, endIndex, tempArray) {
    if (startIndex === endIndex) return;
    const middleIdx = Math.floor((startIndex + endIndex) / 2);
    await mergeSortTopDown(tempArray, startIndex, middleIdx, mainArray);             // Split left side into subsections
    await mergeSortTopDown(tempArray, middleIdx + 1, endIndex, mainArray); // Split right side into subsections
    return await doMerge(mainArray, tempArray, startIndex, middleIdx, endIndex);     // Merge the subsections back together
}

async function doMerge(mainArray, tempArray, startIndex, middleIndex, endIndex) {
    const bars = document.getElementsByClassName('array-bar');
    let mainIndex = startIndex;
    let leftIndex = startIndex;
    let rightIndex = middleIndex + 1;

    while (leftIndex <= middleIndex && rightIndex <= endIndex) {
        await displayAnimations(bars, leftIndex, rightIndex);

        if (tempArray[leftIndex] <= tempArray[rightIndex]) {
            mainArray[mainIndex] = tempArray[leftIndex];
            bars[mainIndex++].style.height = tempArray[leftIndex++] + 'px';
        } else {
            mainArray[mainIndex] = tempArray[rightIndex];
            bars[mainIndex++].style.height = tempArray[rightIndex++] + 'px';
        }
    }

    while (leftIndex <= middleIndex) {
        mainArray[mainIndex] = tempArray[leftIndex];
        bars[mainIndex++].style.height = tempArray[leftIndex++] + 'px';

    }
    while (rightIndex <= endIndex) {
        mainArray[mainIndex] = tempArray[rightIndex];
        bars[mainIndex++].style.height = tempArray[rightIndex++] + 'px';
    }

    return mainArray;
}

// Change the color of the bars at index1 && index2
async function displayAnimations(bars, index1, index2) {
    bars[index1].style.backgroundColor = 'red';
    bars[index2].style.backgroundColor = 'red';
    await new Promise(r => setTimeout(r, 20));
    bars[index1].style.backgroundColor = 'darkturquoise';
    bars[index2].style.backgroundColor = 'darkturquoise';
}