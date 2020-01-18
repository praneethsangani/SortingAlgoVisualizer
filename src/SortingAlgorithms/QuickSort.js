export async function quickSort(mainArray, low, high) {
    if (low < high) {
        let partitionIndex = await partition(mainArray, low, high);   // Places pivot in the correct spot
        await quickSort(mainArray, low, partitionIndex - 1);    // Recursively sort the left of pivot
        await quickSort(mainArray, partitionIndex + 1, high);    // Recursively sort the right of pivot
    }
    return mainArray;
}

// Uses the last element as the pivot
// Places the pivot in the correct position
// and all values less than the pivot on its left
// and all values greater than the pivot on its right
async function partition(mainArray, low, high) {
    const bars = document.getElementsByClassName('array-bar');
    let pivot = mainArray[high];
    // At the end of the for loop, this value will be where we swap the pivot into such that
    // everything on its left is less than it and everything on its right is greater.
    let partitionIndex = low;

    for (let i = 0; i < low; i++) {
        bars[i].style.backgroundColor = 'green';
    }
    bars[high].style.backgroundColor = 'yellow';
    await new Promise(r => setTimeout(r, 3));

    for (let j = low; j < high; j++) {
        bars[j].style.backgroundColor = 'red';
        bars[partitionIndex].style.backgroundColor = 'red';
        await new Promise(r => setTimeout(r, 3));
        if (mainArray[j] > pivot) {
            bars[j].style.backgroundColor = 'darkturquoise';
            bars[partitionIndex].style.backgroundColor = 'darkturquoise';
        }
        if (mainArray[j] <= pivot) {
            bars[partitionIndex].style.backgroundColor = 'red';
            await new Promise(r => setTimeout(r, 3));
            swap(mainArray, bars, j, partitionIndex);
            await new Promise(r => setTimeout(r, 3));
            bars[j].style.backgroundColor = 'darkturquoise';
            bars[partitionIndex].style.backgroundColor = 'darkturquoise';
            partitionIndex++;
        }
    }
    swap(mainArray, bars, high, partitionIndex);  // Swap the pivot into the proper place

    bars[partitionIndex].style.backgroundColor = 'green';
    await new Promise(r => setTimeout(r, 6));
    for (let i = 0; i < low; i++) {
        bars[i].style.backgroundColor = 'green';
    }

    return partitionIndex;
}

function swap(mainArray, bars, j, partitionIndex) {
    let temp = mainArray[partitionIndex];
    mainArray[partitionIndex] = mainArray[j];
    mainArray[j] = temp;

    temp = bars[partitionIndex].style.height;
    bars[partitionIndex].style.height = bars[j].style.height;
    bars[j].style.height = temp;

    temp = bars[partitionIndex].style.backgroundColor;
    bars[partitionIndex].style.backgroundColor = bars[j].style.backgroundColor;
    bars[j].style.backgroundColor = temp;
}