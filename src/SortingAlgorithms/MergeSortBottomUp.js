export async function mergeSortBottomUp(mainArray) {
    let low = 0;
    let high = mainArray.length - 1;
    let tempArray = mainArray.slice();

    // sectionSizes of 1, 2, 4, 8, 16...
    for (let sectionSize = 1; sectionSize <= high - low; sectionSize = 2 * sectionSize) {
        for (let i = low; i < high; i += 2 * sectionSize) {
            let startIndex = i;
            let middleIndex = i + sectionSize - 1;
            let endIndex = Math.min(i + 2 * sectionSize - 1, high);
            await merge(mainArray, tempArray, startIndex, middleIndex, endIndex);
        }
    }
    return mainArray;
}

async function merge(mainArray, tempArray, startIndex, middleIndex, endIndex) {
    const bars = document.getElementsByClassName('array-bar');
    let mainIndex = startIndex;
    let leftIndex = startIndex;
    let rightIndex = middleIndex + 1;
    while (leftIndex <= middleIndex && rightIndex <= endIndex) {
        await displayAnimations(bars, leftIndex, rightIndex);
        if (mainArray[leftIndex] < mainArray[rightIndex]) {
            tempArray[mainIndex++] = mainArray[leftIndex++];
        } else {
            tempArray[mainIndex++] = mainArray[rightIndex++];
        }
        for (let i = startIndex; i <= endIndex; i++) {
            bars[i].style.height = tempArray[i] + 'px';
        }
    }

    while (leftIndex <= middleIndex) {
        tempArray[mainIndex++] = mainArray[leftIndex++];
    }

    for (let i = startIndex; i <= endIndex; i++) {
        mainArray[i] = tempArray[i];
        bars[i].style.height = tempArray[i] + 'px';
    }
    return mainArray;
}

// Change the color of the bars at index1 && index2
async function displayAnimations(bars, index1, index2) {
    bars[index1].style.backgroundColor = 'red';
    bars[index2].style.backgroundColor = 'red';
    await new Promise(r => setTimeout(r, 16));
    bars[index1].style.backgroundColor = 'darkturquoise';
    bars[index2].style.backgroundColor = 'darkturquoise';
}