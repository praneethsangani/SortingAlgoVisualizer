export async function mergeSortTopDown(mainArray, startIndex, endIndex, tempArray) {
    if (startIndex === endIndex) return;
    const middleIdx = Math.floor((startIndex + endIndex) / 2);
    await mergeSortTopDown(tempArray, startIndex, middleIdx, mainArray);
    await mergeSortTopDown(tempArray, middleIdx + 1, endIndex, mainArray);
    return await doMerge(mainArray, startIndex, middleIdx, endIndex, tempArray);
}

async function doMerge(mainArray, startIndex, middleIdx, endIndex, tempArray) {
    const bars = document.getElementsByClassName('array-bar');
    let mainIndex = startIndex;
    let leftIndex = startIndex;
    let rightIndex = middleIdx + 1;

    while (leftIndex <= middleIdx && rightIndex <= endIndex) {
        changeBarColor(bars, leftIndex, rightIndex, 'red');
        if (tempArray[leftIndex] <= tempArray[rightIndex]) {
            mainArray[mainIndex] = tempArray[leftIndex];
            bars[mainIndex++].style.height = tempArray[leftIndex++] + 'px';
            await new Promise(r => setTimeout(r, 8));
            changeBarColor(bars, leftIndex-1, rightIndex, 'darkturquoise');
        } else {
            mainArray[mainIndex] = tempArray[rightIndex];
            bars[mainIndex++].style.height = tempArray[rightIndex++] + 'px';
            await new Promise(r => setTimeout(r, 8));
            await changeBarColor(bars, leftIndex, rightIndex-1, 'darkturquoise');
        }
    }

    while (leftIndex <= middleIdx) {
        mainArray[mainIndex] = tempArray[leftIndex];
        bars[mainIndex++].style.height = tempArray[leftIndex++] + 'px';

    }
    while (rightIndex <= endIndex) {
        mainArray[mainIndex] = tempArray[rightIndex];
        bars[mainIndex++].style.height = tempArray[rightIndex++] + 'px';
    }

    console.log(mainArray);
    return mainArray;
}

// Change the color of the bars at index1 && index2
function changeBarColor(bars, index1, index2, color) {
    bars[index1].style.backgroundColor = color;
    bars[index2].style.backgroundColor = color;
}